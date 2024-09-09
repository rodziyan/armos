$(document).ready(function () {
  var dt_user_table = $('.datatables-users');

  if (dt_user_table.length) {
    var dt_user = dt_user_table.DataTable({
      ajax: {
        url: assetsPath + 'json/warehouse2.json',
        dataSrc: function (json) {
          // Restructure the data to group by name
          var groupedData = [];
          json.forEach(function (warehouse) {
            var group = {
              id: warehouse.id,
              name: warehouse.name,
              _children: warehouse.locations.map(function (location) {
                return {
                  name: location.name,
                  address: location.address,
                  availability: location.availability,
                  area: location.area,
                  zona: location.zona
                };
              })
            };
            groupedData.push(group);
          });
          return groupedData;
        }
      },
      columns: [
        {
          className: 'dt-control',
          orderable: false,
          data: null,
          defaultContent: ''
        },
        { data: 'id' },
        { data: 'name' },
        { data: null, defaultContent: '' },
        { data: null, defaultContent: '' },
        { data: null, defaultContent: '' },
        { data: null, defaultContent: '' },
        {
          data: null,
          orderable: false,
          render: function (data, type, row) {
            if (row._children) {
              return `
                <button type="button" class="btn btn-sm btn-success btn-icon rounded-pill waves-effect addModal" 
                        onclick="confirmAdd()">
                        <i class="ri-add-line ri-20px"></i>
                </button>
                <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal" 
                        onclick="window.location.href='form-warehouse2.html'">
                        <i class="ri-pencil-line ri-20px"></i>
                </button>
                <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect deleteModal" 
                        onclick="confirmDelete()">
                        <i class="ri-delete-bin-line ri-20px"></i>
                </button>`;
            } else {
              return '';
            }
          }
        }
      ],
      columnDefs: [
        {
          targets: 2,
          render: function (data, type, row) {
            return row._children ? '<span>' + data + '</span>' : data;
          }
        },
        {
          targets: 3,
          render: function (data, type, row) {
            if (row._children) {
              return '';
            } else {
              return row.name;
            }
          }
        },
        {
          targets: 4,
          render: function (data, type, row) {
            if (row._children) {
              return '';
            } else {
              return row.address;
            }
          }
        },
        {
          targets: 5,
          render: function (data, type, row) {
            if (row._children) {
              return '';
            } else {
              return row.availability;
            }
          }
        },
        {
          targets: 6,
          render: function (data, type, row) {
            if (row._children) {
              return '';
            } else {
              return row.area;
            }
          }
        },
        {
          targets: 7,
          render: function (data, type, row) {
            if (row._children) {
              return '';
            } else {
              return row.zona;
            }
          }
        },
        {
          targets: -1,
          orderable: false,
          render: function (data, type, row) {
            if (row._children) {
              return '';
            } else {
              return `
                <button type="button" class="btn btn-sm btn-success btn-icon rounded-pill waves-effect addModal" 
                        onclick="confirmAdd()">
                        <i class="ri-add-line ri-20px"></i>
                </button>
               <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal" 
                        onclick="window.location.href='form-warehouse2.html'">
                        <i class="ri-pencil-line ri-20px"></i>
                </button>
                <button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect deleteModal" 
                        onclick="confirmDelete()">
                        <i class="ri-delete-bin-line ri-20px"></i>
                </button>`;
            }
          }
        }
      ],
      order: [[1, 'asc']],
      searching: false
    });

    // Add event listener for opening and closing details
    dt_user_table.on('click', 'td.dt-control', function () {
      var tr = $(this).closest('tr');
      var row = dt_user.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
      } else {
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass('shown');
      }
    });

    // Helper function to format the child rows
    function format(d) {
      if (d._children) {
        var childRows = '';
        d._children.forEach(function (child) {
          childRows +=
            '<tr>' +
            '<td style="width:260px"></td>' +
            '<td>' +
            '<span style="width:280px">' +
            child.name +
            '</span>' +
            '</td>' +
            '<td style="width:240px">' +
            child.address +
            '</td>' +
            '<td style="width:160px">' +
            child.availability +
            '</td>' +
            '<td style="width:100px">' +
            child.area +
            '</td>' +
            '<td style="width:105px">' +
            child.zona +
            '</td>' +
            '<td>' +
            '<button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill waves-effect viewModal" ' +
            'onclick="window.location.href=\'form-warehouse2.html\'">' +
            '<i class="ri-pencil-line ri-20px"></i>' +
            '</button>' +
            '<button type="button" class="btn btn-sm btn-danger btn-icon rounded-pill waves-effect deleteModal" ' +
            'onclick="confirmDelete()">' +
            '<i class="ri-delete-bin-line ri-20px"></i>' +
            '</button>' +
            '</td>' +
            '</tr>';
        });
        return '<table class="table">' + childRows + '</table>';
      }
      return 'No additional details';
    }
  }
});
