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
          render: function (data, type, full, meta) {
            return '<span>' + full['nama'] + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['nama_jalan'] + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['no_rumah'] + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['rt_rw'] + '</span>';
          }
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['kelurahan'] + '</span>';
          }
        },
        {
          targets: 6,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['kecamatan'] + '</span>';
          }
        },
        {
          targets: 7,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['kota_kabupaten'] + '</span>';
          }
        },
        {
          targets: 8,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['provinsi'] + '</span>';
          }
        },
        {
          targets: 9,
          render: function (data, type, full, meta) {
            return '<span>' + full['alamat']['kode_pos'] + '</span>';
          }
        },
        {
          targets: 10,
          render: function (data, type, full, meta) {
            return '<span>' + full['geo_tagging']['long'] + '</span>';
          }
        },
        {
          targets: 11,
          render: function (data, type, full, meta) {
            return '<span>' + full['geo_tagging']['lat'] + '</span>';
          }
        }
      ],
      searching: false 
    });
  }
});
