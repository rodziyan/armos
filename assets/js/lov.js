'use strict';

/* CSS for dropdown */
const css = `
  .form-select {
  background-color: #fff !important;
  color: #000 !important;
}

.bg-label-success {
  background-color: #ffffff !important;
  color: #155724 !important;
}

.bg-label-secondary {
  background-color: #ffffff !important;
  color: #6c757d !important;
}

.form-select option {
  background-color: #fff !important;
  color: #000 !important;
`;

document.querySelectorAll('#status option').forEach(option => {
  if (option.dataset.color) {
    option.classList.add(`bg-label-${option.dataset.color}`);
  }
});

function createUpdateModal() {
  return `
  <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateModalLabel">Update Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="lov_code" class="form-label">Code</label>
              <input type="text" class="form-control" id="lov_code" readonly>
            </div>
            <div class="mb-3">
              <label for="lov_value" class="form-label">Value</label>
              <input type="text" class="form-control" id="lov_value" readonly>
            </div>
            <div class="mb-3">
              <label for="lov_parent" class="form-label">Parent</label>
              <input type="text" class="form-control" id="lov_parent" readonly>
            </div>
            <div class="mb-3">
            <label for="status" class="form-label">Status</label>
            <select class="form-select" id="status">
              <option value="1" data-color="success">Active</option>
              <option value="2" data-color="secondary">Inactive</option>
            </select>
          </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

// Function to append the modal to the body
function appendModalToBody() {
  // Append modal HTML to the body if it doesn't already exist
  if (!document.getElementById('updateModal')) {
    document.body.insertAdjacentHTML('beforeend', createUpdateModal());
  }
}

// Call this function to ensure the modal is added to the DOM
appendModalToBody();

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
              '<button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect modalTrigger updateModal" ' +
              'style="border: none;" ' +
              'data-id="' +
              full.id +
              '" ' +
              'data-lov_code="' +
              full.lov_code +
              '" ' +
              'data-lov_value="' +
              full.lov_value +
              '" ' +
              'data-lov_parent="' +
              full.lov_parent +
              '" ' +
              'data-status="' +
              full.status +
              '" ' +
              'data-bs-toggle="tooltip" ' +
              'title="Update">' +
              '<i class="ri-pencil-line ri-20px"></i>' +
              '<button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect" style="border: none;">' +
              '<i class="ri-delete-bin-6-line ri-20px"></i>' +
              '</button>'
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
  $('body').on('click', '.updateModal', function () {
    var id = $(this).data('id');
    var lovCode = $(this).data('lov_code');
    var lovValue = $(this).data('lov_value');
    var lovParent = $(this).data('lov_parent');
    var status = $(this).data('status');

    // Set input values
    $('#lov_code').val(lovCode);
    $('#lov_value').val(lovValue);
    $('#lov_parent').val(lovParent);

    // Define status mappings
    var statusMap = {
      1: { title: 'Active', class: 'bg-label-success' },
      2: { title: 'Inactive', class: 'bg-label-secondary' }
    };

    // Update status dropdown
    var $statusDropdown = $('#status');
    $statusDropdown.val(status);

    // Update class for dropdown based on selected status
    $statusDropdown.removeClass('bg-label-success bg-label-secondary');
    if (statusMap[status]) {
      $statusDropdown.addClass(statusMap[status].class);
    }

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('updateModal'));
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
