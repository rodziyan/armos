/**
 * Page User List
 */

'use strict';

// Datatable (jquery)
$(function () {
  let borderColor, bodyBg, headingColor;

  if (isDarkStyle) {
    borderColor = config.colors_dark.borderColor;
    bodyBg = config.colors_dark.bodyBg;
    headingColor = config.colors_dark.headingColor;
  } else {
    borderColor = config.colors.borderColor;
    bodyBg = config.colors.bodyBg;
    headingColor = config.colors.headingColor;
  }

  // Function to create and append the modal
  function createUpdateModal() {
    var modalHTML = `
    <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css">
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-simple modal-edit-user">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body p-0">
              <div class="text-center mb-6">
                <h4 class="mb-2">Perbarui Informasi Pengemudi</h4>
                <p class="mb-6">Memperbarui informasi pengemudi mungkin melibatkan pemeriksaan privasi.</p>
              </div>
              <form id="updateForm" class="row g-5" onsubmit="return false">
               <!-- Icon and Arrow -->
                <div class="col-12 text-center mb-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="ri-user-fill" style="font-size: 50px; margin-right: 8px;"></i>
                    <span style="font-size: 40px; margin: 0 8px;">→</span>
                    <i class="ri-truck-fill" style="font-size: 50px;"></i>
                  </div>
                </div>
                <!-- Driver Name -->
                <div class="col-12">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id="driverName"
                      name="driverName"
                      class="form-control"
                      placeholder="Enter driver name" />
                    <label for="driverName">Driver Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating form-floating-outline">
                    <select
                      id="vehicleSelect"
                      name="vehicleSelect"
                      class="form-select"
                      aria-label="Select Vehicle">
                      <option value="" selected>Select Vehicle</option>
                      <option value="Truk pick up">Truk pick up</option>
                      <option value="Truk Fuso">Truk Fuso</option>
                      <option value="Truk box CDE">Truk box CDE</option>
                      <option value="Motor">Motor</option>
                      <option value="Truk">Truk</option>
                      <option value="Kontainer">Kontainer</option>
                      <option value="Truk CDD long box">Truk CDD long box</option>
                      <option value="Mobil van">Mobil van</option>
                      <option value="Truk trintin">Truk trintin</option>
                      <option value="Truk box CDD">Truk box CDD</option>
                      <option value="Truk wingbox">Truk wingbox</option>
                    </select>
                    <label for="vehicleSelect">Vehicle</label>
                  </div>
                </div>


                <div class="col-12 text-center d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                  <button type="submit" class="btn btn-primary">Update</button>
                  <button
                    type="reset"
                    class="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    // Append the modal HTML to the body
    $('body').append(modalHTML);
  }

  // Create and append the modal when the document is ready
  createUpdateModal();

  // Variable declaration for table
  var dt_user_table = $('.datatables-users'),
    select2 = $('.select2'),
    userView = 'app-user-view-account.html',
    statusObj = {
      1: { title: 'Active', class: 'bg-label-success' },
      2: { title: 'Inactive', class: 'bg-label-secondary' }
    };

  if (select2.length) {
    var $this = select2;
    select2Focus($this);
    $this.wrap('<div class="position-relative"></div>').select2({
      placeholder: 'Select Country',
      dropdownParent: $this.parent()
    });
  }

  // Variable declaration for table
  var dt_user_table = $('.datatables-users'),
    select2 = $('.select2'),
    userView = 'app-user-view-account.html',
    statusObj = {
      1: { title: 'Active', class: 'bg-label-success' },
      2: { title: 'Inactive', class: 'bg-label-secondary' }
    };

if (select2.length) {
  var $this = select2;
  select2Focus($this);
  $this.wrap('<div class="position-relative"></div>').select2({
    placeholder: 'Select Country',
    dropdownParent: $this.parent()
  });
}

// Users datatable
if (dt_user_table.length) {
  var dt_user = dt_user_table.DataTable({
    ajax: assetsPath + 'json/driver-list.json', // JSON file to add data
    columns: [
      // columns according to JSON
      { data: '' },
      { data: 'id' },
      { data: 'full_name' },
      { data: 'kendaraan' },
      { data: 'status' },
      { data: 'action' }
    ],
    columnDefs: [
      {
        // For Responsive
        className: 'control',
        searchable: false,
        orderable: false,
        responsivePriority: 2,
        targets: 0,
        render: function (data, type, full, meta) {
          return '';
        }
      },
      {
        // For Checkboxes
        targets: 1,
        orderable: false,
        render: function () {
          return '<input type="checkbox" class="dt-checkboxes form-check-input">';
        },
        checkboxes: {
          selectAllRender: '<input type="checkbox" class="form-check-input">'
        }
      },
      {
        // User full name and kendaraan
        targets: 2,
        responsivePriority: 4,
        render: function (data, type, full, meta) {
          var $name = full['full_name'],
              $image = full['avatar'];
          if ($image) {
            // For Avatar image
            var $output =
              '<img src="' + assetsPath + 'img/avatars/' + $image + '" alt="Avatar" class="rounded-circle">';
          } else {
            // For Avatar badge
            var stateNum = Math.floor(Math.random() * 6);
            var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
            var $state = states[stateNum],
                $initials = $name.match(/\b\w/g) || [];
            $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
            $output = '<span class="avatar-initial rounded-circle bg-label-' + $state + '">' + $initials + '</span>';
          }
          // Creates full output for row
          var $row_output =
            '<div class="d-flex justify-content-start align-items-center user-name">' +
            '<div class="avatar-wrapper">' +
            '<div class="avatar avatar-sm me-3">' +
            $output +
            '</div>' +
            '</div>' +
            '<div class="d-flex flex-column">' +
            '<a href="' +
            userView +
            '" class="text-truncate text-heading"><span class="fw-medium">' +
            $name +
            '</span></a>' +
            '</div>' +
            '</div>';
          return $row_output;
        }
      },
      {
        // User kendaraan
        targets: 3,
        render: function (data, type, full, meta) {
          var $kendaraan = full['kendaraan'];
          return '<span >' + $kendaraan + '</span>';
        }
      },
      {
        // User Status
        targets: 4,
        render: function (data, type, full, meta) {
          var $status = full['status'];

          return (
            '<span class="badge rounded-pill ' +
            statusObj[$status].class +
            '" text-capitalized>' +
            statusObj[$status].title +
            '</span>'
          );
        }
      },
      {
        // Actions
        targets: -1,
        title: 'Actions',
        searchable: false,
        orderable: false,
        render: function (data, type, full, meta) {
          return (
            '<button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect updateModal" ' +
            'data-id="' + full.id + '" ' +
            'data-name="' + full.full_name + '" ' +
            'data-vehicle="' + full.kendaraan + '" ' +
            'data-bs-toggle="tooltip" title="Update">' +
            '<i class="ri-pencil-line ri-20px"></i>' +
            '</button>'
          );
        }
      }           
      ],
      order: [[2, 'desc']],
      dom:
        '<"row"' +
        '<"col-md-2 d-flex align-items-center justify-content-md-start justify-content-center"<"dt-action-buttons mt-5 mt-md-0"B>>' +
        '<"col-md-10"<"d-flex align-items-center justify-content-md-end justify-content-center"<"me-4"f><"add-new">>>' +
        '>t' +
        '<"row"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: 'Show _MENU_',
        search: '',
        searchPlaceholder: 'Search User'
      },
      // Buttons with Dropdown
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-outline-secondary dropdown-toggle waves-effect waves-light',
          text: '<span class="d-flex align-items-center"><i class="ri-upload-2-line ri-16px me-2"></i> <span class="d-none d-sm-inline-block">Export</span></span> ',
          buttons: [
            {
              extend: 'print',
              text: '<i class="ri-printer-line me-1" ></i>Print',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be print
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              },
              customize: function (win) {
                //customize print view for dark
                $(win.document.body)
                  .css('color', headingColor)
                  .css('border-color', borderColor)
                  .css('background-color', bodyBg);
                $(win.document.body)
                  .find('table')
                  .addClass('compact')
                  .css('color', 'inherit')
                  .css('border-color', 'inherit')
                  .css('background-color', 'inherit');
              }
            },
            {
              extend: 'csv',
              text: '<i class="ri-file-text-line me-1" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'excel',
              text: '<i class="ri-file-excel-line me-1"></i>Excel',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'pdf',
              text: '<i class="ri-file-pdf-line me-1"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            },
            {
              extend: 'copy',
              text: '<i class="ri-file-copy-line me-1"></i>Copy',
              className: 'dropdown-item',
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
                // prevent avatar to be display
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = '';
                    $.each(el, function (index, item) {
                      if (item.classList !== undefined && item.classList.contains('user-name')) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  }
                }
              }
            }
          ]
        }
      ],
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['full_name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      },
      initComplete: function () {
        // Adding status filter once table initialized
            this.api()
            .columns(6)
            .every(function () {
              var column = this;
              var select = $(
                '<select id="FilterTransaction" class="form-select text-capitalize"><option value=""> Select Status </option><option value="1">Active</option><option value="2">Inactive</option></select>'
              )
                .appendTo('.user_status')
                .on('change', function () {
                  var val = $.fn.dataTable.util.escapeRegex($(this).val());
                  column.search(val ? '^' + val + '$' : '', true, false).draw();
                });
            });
          // Adding driver filter once table initialized
          this.api()
            .columns(5)
            .every(function () {
              var column = this;
              var select = $(
                '<select id="FilterDriver" class="form-select text-capitalize"><option value="">Select Driver</option><option value="0">Semua</option><option value="1">Memiliki Kendaraan</option><option value="2">Tidak Memiliki Kendaraan</option></select>'
              )
                .appendTo('.user_driver')
                .on('change', function () {
                  var val = $(this).val();
                  if (val === "1") {
                    column.search("^(?!No Vehicle$).*", true, false).draw(); // Matches all except "No Vehicle"
                  } else if (val === "0") {
                    column.search("^No Vehicle$", true, false).draw(); // Matches only "No Vehicle"
                  } else {
                    column.search("").draw(); // Resets the search
                  }
                });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append(
                  '<option value="' +
                    statusObj[d].title +
                    '" class="text-capitalize">' +
                    statusObj[d].title +
                    '</option>'
                );
              });
          });
      }
    });
  }

  // Delete Record
  $('.datatables-users tbody').on('click', '.delete-record', function () {
    dt_user.row($(this).parents('tr')).remove().draw();
  });
});

 // Show Update Modal on button click
 $('body').on('click', '.updateModal', function () {
  var userId = $(this).data('id');
  // Fetch user data based on userId (if needed) and fill the form fields
  $('#updateModal').modal('show');
});

// Show Update Modal on button click
$('body').on('click', '.updateModal', function () {
  var userId = $(this).data('id');
  var driverName = $(this).data('name');
  var vehicle = $(this).data('vehicle');
  
  // Fill the form fields with the data
  $('#driverName').val(driverName);
  $('#vehicleSelect').val(vehicle);
  
  $('#updateModal').modal('show');
});
// Validation & Phone mask
(function () {
  const phoneMaskList = document.querySelectorAll('.phone-mask'),
    addNewUserForm = document.getElementById('addNewUserForm');

  // Phone Number
  if (phoneMaskList) {
    phoneMaskList.forEach(function (phoneMask) {
      new Cleave(phoneMask, {
        phone: true,
        phoneRegionCode: 'US'
      });
    });
  }
  // Function to dynamically include Remix Icon stylesheet
    function includeRemixIcon() {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'assets/vendor/fonts/remixicon/remixicon.css'; 
      document.head.appendChild(link);
    }

    // Call the function to include Remix Icon stylesheet
    includeRemixIcon();
  // Add New User Form Validation
  const fv = FormValidation.formValidation(addNewUserForm, {
    fields: {
      userFullname: {
        validators: {
          notEmpty: {
            message: 'Please enter fullname '
          }
        }
      },
      userEmail: {
        validators: {
          notEmpty: {
            message: 'Please enter your email'
          },
          emailAddress: {
            message: 'The value is not a valid email address'
          }
        }
      }
    },
    plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
        // Use this for enabling/changing valid/invalid class
        eleValidClass: '',
        rowSelector: function (field, ele) {
          // field is the field name & ele is the field element
          return '.mb-5';
        }
      }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      // Submit the form when all fields are valid
      // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
      autoFocus: new FormValidation.plugins.AutoFocus()
    }
  });
})();
