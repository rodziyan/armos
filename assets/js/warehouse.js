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

  // Users datatable
  if ($('#dt_warehouse_table').length) {
    var dt_user = $('#dt_warehouse_table').DataTable({
      ajax: {
        url: assetsPath + 'json/warehouse.json', // JSON file to add data
        dataSrc: 'data'
      },
      columns: [
        { data: 'id' },
        { data: 'nama' },
        { data: 'alamat.nama_jalan' },
        { data: 'alamat.no_rumah' },
        { data: 'alamat.rt_rw' },
        { data: 'alamat.kelurahan' },
        { data: 'alamat.kecamatan' },
        { data: 'alamat.kota_kabupaten' },
        { data: 'alamat.provinsi' },
        { data: 'alamat.kode_pos' },
        { data: 'geo_tagging.long' },
        { data: 'geo_tagging.lat' }
      ],
      columnDefs: [
        {
          targets: 0,
          orderable: false,
          searchable: false,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 1,
          render: function (data, type, full) {
            return '<span>' + full['nama'] + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['nama_jalan'] + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['no_rumah'] + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['rt_rw'] + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['kelurahan'] + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['kecamatan'] + '</span>';
          }
        },
        {
          targets: 7,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['kota_kabupaten'] + '</span>';
          }
        },
        {
          targets: 8,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['provinsi'] + '</span>';
          }
        },
        {
          targets: 9,
          render: function (data, type, full) {
            return '<span>' + full['alamat']['kode_pos'] + '</span>';
          }
        },
        {
          targets: 10,
          render: function (data, type, full) {
            return '<span>' + full['geo_tagging']['long'] + '</span>';
          }
        },
        {
          targets: 11,
          render: function (data, type, full) {
            return '<span>' + full['geo_tagging']['lat'] + '</span>';
          }
        }
      ],
      order: [[2, 'desc']],
      dom:
        '<"row"' +
        '<"col-md-13"<"d-flex align-items-center justify-content-md-end justify-content-center"<"me-4"f><"add-new">>>' +
        '>t' +
        '<"row"' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      language: {
        sLengthMenu: 'Show _MENU_',
        search: '',
        searchPlaceholder: 'Search Warehouse'
      },
      searching: false // Disable the search box
    });

    // Add new button with margin top and bottom
    $('.add-new').html(
      "<button class='btn btn-primary waves-effect waves-light mt-3 mb-3' data-bs-toggle='modal' data-bs-target='#modalAddWarehouse'>" +
      "<i class='ri-add-line me-0 me-sm-1 d-inline-block d-sm-none'></i>" +
      "<span class='d-none d-sm-inline-block'>Tambah Warehouse</span>" +
      "</button>"
    ); 
  }

  // Validation for Add New Warehouse Form
  (function () {
    const addNewWarehouseForm = document.getElementById('addNewWarehouseForm');

    if (addNewWarehouseForm) {
      const fv = FormValidation.formValidation(addNewWarehouseForm, {
        fields: {
          warehouseName: {
            validators: {
              notEmpty: {
                message: 'Please enter the warehouse name'
              }
            }
          },
          streetAddress: {
            validators: {
              notEmpty: {
                message: 'Please enter the street address'
              }
            }
          },
          houseNumber: {
            validators: {
              notEmpty: {
                message: 'Please enter the house number'
              }
            }
          },
          rtRw: {
            validators: {
              notEmpty: {
                message: 'Please enter RT/RW'
              }
            }
          },
          kelurahan: {
            validators: {
              notEmpty: {
                message: 'Please select a kelurahan'
              }
            }
          },
          kecamatan: {
            validators: {
              notEmpty: {
                message: 'Please select a kecamatan'
              }
            }
          },
          kotaKabupaten: {
            validators: {
              notEmpty: {
                message: 'Please select a kota/kabupaten'
              }
            }
          },
          provinsi: {
            validators: {
              notEmpty: {
                message: 'Please select a provinsi'
              }
            }
          },
          postalCode: {
            validators: {
              notEmpty: {
                message: 'Please enter the postal code'
              }
            }
          },
          geoLongitude: {
            validators: {
              notEmpty: {
                message: 'Please enter the longitude'
              },
              numeric: {
                message: 'The value must be a number'
              }
            }
          },
          geoLatitude: {
            validators: {
              notEmpty: {
                message: 'Please enter the latitude'
              },
              numeric: {
                message: 'The value must be a number'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: function (field, ele) {
              return '.mb-5';
            }
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        }
      });
    }
  })();
});
