'use strict';

// Menambahkan CSS ke dalam halaman melalui JavaScript
$(document).ready(function () {
  var css = `
    .user_role {
      display: flex;
      align-items: center;
      gap: 0px; /* Jarak antara dropdown dan tombol */
    }

    #UserRole {
      width: 150px; /* Atur lebar dropdown sesuai kebutuhan */
      height: 42px;
    }

    .add-new {
      margin-left: 0px; /* Jarak antara dropdown dan tombol */
    }
  `;

  var style = $('<style>').text(css);
  $('head').append(style);
});

// Datatable (jquery)
$(function () {
  var dtUserTable = $('.datatables-users');

  // Users List datatable
  if (dtUserTable.length) {
    dt_User = dtUserTable.DataTable({
      ajax: assetsPath + 'json/lov.json', // JSON file to add data
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'lov_code' },
        { data: 'lov_value' },
        { data: 'lov_parent' },
        { data: 'status' },
        { data: 'action' }
      ],
      columnDefs: [
        {
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
          targets: 1,
          orderable: false,
          render: function (data, type, full) {
            return '<input type="checkbox" class="dt-checkboxes form-check-input" data-id="' + full['id'] + '">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 2,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            var $lovCode = full['lov_code'];
            return '<span>' + $lovCode + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full, meta) {
            var $lovValue = full['lov_value'];
            return '<span>' + ($lovValue || 'N/A') + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            var $lovParent = full['lov_parent'];
            return '<span>' + ($lovParent || 'N/A') + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            var $status = full['status'];
            var statusObj = {
              1: { title: 'Active', class: 'bg-label-success' },
              2: { title: 'Inactive', class: 'bg-label-secondary' }
            };
            return '<span class="badge ' + statusObj[$status]?.class + '">' + statusObj[$status]?.title + '</span>';
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
              '<div class="d-flex align-items-center gap-50">' +
              '<a href="javascript:void(0);" class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect waves-light modal-ve" data-id="' +
              full['id'] +
              '" title="View"><i class="ri-eye-line ri-20px"></i></a>' +
              '<a href="javascript:void(0);" class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect waves-light modal-ve" data-id="' +
              full['id'] +
              '" title="Edit"><i class="ri-pencil-line ri-20px"></i></a>' +
              '</div>'
            );
          }
        }
      ],
      order: [[2, 'desc']],
      dom:
        '<"row mx-1"' +
        '<"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start gap-4 mt-5 mt-md-0"f>' + // Filter (Search)
        '<"col-sm-12 col-md-7 d-flex align-items-center justify-content-md-end flex-column flex-sm-row flex-nowrap"' +
        '<"search-and-add d-flex align-items-center gap-2"<"user_role w-px-200 mb-5 mb-sm-0">>>' +
        '>t' +
        '<"row mx-1"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: 'Show _MENU_ entries',
        sSearch: '',
        sSearchPlaceholder: 'Search Code Lov'
      },
      drawCallback: function () {
        var searchAndAddContainer = $('.search-and-add');
        if ($('.add-new-role').length === 0) {
          searchAndAddContainer.append(
            '<button class="btn btn-sm btn-primary text-nowrap add-new-role">Tambah Lov</button>'
          );
        }
        $('.add-new-role').css('margin-top', '0');
        // Handle 'Add Role' button click event
        $('.add-new-role').on('click', function () {
          // Show the modal
          $('#addRoleModal').modal('show');
        });
      }
    });
  }
});

$(document).ready(function () {
  $('#dtUserTable').on('click', 'modal-ve', function () {
    var id = $(this).data('id');
    var rowData = dt_User.row($(this).closest('tr')).data();

    $('#lov_code').val(rowData.lov_code);
    $('#lov_value').val(rowData.lov_value);
    $('#lov_parent').val(rowData.lov_parent);
    $('#status').val(rowData.status);

    var myModal = new bootstrap.Modal(document.getElementById('actionModal'));
    myModal.show();
  });
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

(function () {
  // On edit role click, update text
  var roleEditList = document.querySelectorAll('.role-edit-modal'),
    roleAdd = document.querySelector('.add-new-role'),
    roleTitle = document.querySelector('.role-title');

  roleAdd.onclick = function () {
    roleTitle.innerHTML = 'Add New Role'; // reset text
  };
  if (roleEditList) {
    roleEditList.forEach(function (roleEditEl) {
      roleEditEl.onclick = function () {
        roleTitle.innerHTML = 'Edit Role'; // reset text
      };
    });
  }
})();
