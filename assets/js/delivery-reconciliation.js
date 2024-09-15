// Function to create and append the modal to the DOM
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    var dt_payout_table = $('.datatables-payout');
    if (dt_payout_table.length) {
      dt_payout_table.DataTable({
        ajax: assetsPath + 'json/delivery-recon.json',
        columns: [
          { data: null }, // Ensure data corresponds to your data source
          { data: 'driver_name' },
          { data: 'driver_status' },
          { data: 'route_id' },
          { data: 'drop_completion' },
          { data: 'jumlah_faktur' },
          { data: 'jumlah_qty' },
          { data: 'action' }
        ],
        columnDefs: [
          {
            targets: 0,
            render: function () {
              return ''; // Empty column
            }
          },
          {
            targets: 1,
            render: function (data, type, full) {
              return '<span>' + full['driver_name'] + '</span>';
            }
          },
          {
            targets: 2,
            render: function (data, type, full) {
              var statusObj = {
                1: { title: 'Finish Trip', class: 'bg-label-success' },
                2: { title: 'Partial Trip', class: 'bg-label-primary' },
                3: { title: 'Reconciled', class: 'bg-label-warning' }
              };
              return (
                '<span class="badge rounded-pill ' +
                statusObj[full['driver_status']].class +
                '">' +
                statusObj[full['driver_status']].title +
                '</span>'
              );
            }
          },
          {
            targets: 3,
            render: function (data, type, full) {
              return '<span>' + full['route_id'] + '</span>';
            }
          },
          {
            targets: 4,
            render: function (data, type, full) {
              return '<span>' + full['drop_completion'] + '</span>';
            }
          },
          {
            targets: 5,
            render: function (data, type, full) {
              return '<span>' + full['jumlah_faktur'] + '</span>';
            }
          },
          {
            targets: 6,
            render: function (data, type, full) {
              return '<span>' + full['jumlah_qty'] + '</span>';
            }
          },
          {
            targets: -1,
            render: function (data, type, full) {
              return `
               <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal" data-bs-toggle="modal" data-bs-target="#viewModal">
                  <i class="ri-eye-line"></i>
              </button>
          `;
            }
          }
        ],
        searching: false
      });
    }

    // Ensure the elements exist before adding event listeners
    var triggerChangeVehicleModal = document.getElementById('triggerChangeVehicleModal');
    var triggerViewDetailsModal = document.getElementById('triggerViewDetailsModal');
    var triggerReturnModal = document.getElementById('triggerReturnModal');
    var triggerWMSModal = document.getElementById('triggerWMSModal');

    // Add event listeners if elements are found
    if (triggerChangeVehicleModal) {
      triggerChangeVehicleModal.addEventListener('click', function () {
        showModal('viewModal');
      });
    }

    if (triggerViewDetailsModal) {
      triggerViewDetailsModal.addEventListener('click', function () {
        showModal('modalView');
      });
    }

    if (triggerReturnModal) {
      triggerReturnModal.addEventListener('click', function () {
        showModal('returnModal');
      });
    }

    if (triggerWMSModal) {
      triggerWMSModal.addEventListener('click', function () {
        showModal('WMSModal');
      });
    }
  });
});

function showModal(modalId) {
  var modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}
