$(document).ready(function () {
  const statusObj = {
    1: { title: 'Approved', class: 'bg-label-success' },
    2: { title: 'Waiting', class: 'bg-label-warning' },
    3: { title: 'Hold', class: 'bg-label-info' },
    4: { title: 'Cancel', class: 'bg-label-danger' }
  };

  // Declare dt_User variable
  let dt_User;

  // Create and append the modal when the document is ready
  $(document).ready(function () {
    // Initialize DataTable
    if ($('.datatables-users').length) {
      dt_User = $('.datatables-users').DataTable({
        ajax: assetsPath + 'json/order-approval.json',
        columns: [
          { data: '' },
          { data: 'id' },
          { data: 'faktur_no' },
          { data: 'nama_customer' },
          { data: 'lokasi_customer' },
          { data: 'total_barang' },
          { data: 'total' },
          { data: 'action' }
        ],
        columnDefs: [
          {
            className: 'control',
            searchable: false,
            orderable: false,
            responsivePriority: 2,
            targets: 0,
            render: function () {
              return '';
            }
          },
          {
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
            targets: 2,
            render: function (data) {
              return '<span>' + data + '</span>';
            }
          },
          {
            targets: 3,
            render: function (data) {
              return '<span>' + data + '</span>';
            }
          },
          {
            targets: 4,
            render: function (data) {
              return '<span>' + data + '</span>';
            }
          },
          {
            targets: 5,
            render: function (data) {
              return '<span>' + data + '</span>';
            }
          },
          {
            targets: 6,
            render: function (data) {
              return '<span>' + data + '</span>';
            }
          },
          {
            targets: -1,
            title: 'Actions',
            orderable: false,
            render: function () {
              return `
                <button type="button" class="btn btn-sm btn-icon waves-effect">
                  <i class="ri-arrow-up-fill ri-20px"></i>
                  <i class="ri-arrow-down-fill ri-20px"></i>
                </button>
                 <button type="button" class="btn btn-sm btn-danger btn-icon btn-end rounded-pill waves-effect" style="border: none;">
                  <i class="ri-delete-bin-6-line ri-20px"></i>
                  </button>
              `;
            }
          }
        ]
      });

      // Delete Record
      $('.datatables-users tbody').on('click', '.delete-record', function () {
        dt_User.row($(this).parents('tr')).remove().draw();
      });

      // Display the first row's status in #status-container
      dt_User.on('draw', function () {
        const data = dt_User.row(0).data();
        console.log('Data from first row:', data);

        if (data) {
          const status = data.status; // Declare status here
          console.log('Status:', status); // Debugging status value

          const statusData = statusObj[status];
          const statusHTML = statusData
            ? `<div class="status-item ${statusData.class || ''}">
                  ${statusData.title || ''}
              </div>`
            : '<div class="status-item">Status not found</div>';

          $('#status-container').html(statusHTML); // Insert status HTML into #status-container
        } else {
          $('#status-container').html('<div class="status-item">No data available</div>');
        }
      });

      // Load the JSON data using AJAX
      $.ajax({
        url: assetsPath + 'json/order-approval.json',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
          // Assuming the JSON response has the same structure as orderApprovalData
          const orderApprovalData = response;
          const driverVehicleSelect = document.getElementById('driver-vehicle');

          if (driverVehicleSelect) {
            // Populate the dropdown with driver_vehicle data
            orderApprovalData.data.forEach(item => {
              if (item.driver_vehicle) {
                const option = document.createElement('option');
                option.value = item.driver_vehicle;
                option.textContent = item.driver_vehicle;
                driverVehicleSelect.appendChild(option);
              }
            });
          } else {
            console.error('Element with id="driver-vehicle" not found.');
          }
        },
        error: function (xhr, status, error) {
          console.error('Failed to load order-approval.json:', error);
        }
      });
    }
  });
});
