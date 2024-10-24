$(function () {
  'use strict';

  // Initialize DataTable
  var dt_payout_table = $('.datatables-payout');
  if (dt_payout_table.length) {
    dt_payout_table.DataTable({
      ajax: assetsPath + 'json/payout.json',
      columns: [
        { data: null, defaultContent: '' },
        { data: 'trip_id' },
        { data: 'faktur_number' },
        { data: 'tanggal' },
        { data: 'status' }
      ],
      columnDefs: [
        {
          className: 'control',
          searchable: false,
          orderable: false,
          targets: 0,
          render: function () {
            return '';
          }
        },
        {
          targets: 1,
          render: function (data, type, full) {
            return '<span>' + full['trip_id'] + '</span>';
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            return '<span>' + full['faktur_number'] + '</span>';
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            return '<span>' + full['tanggal'] + '</span>';
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            var statusObj = {
              1: { title: 'Paid', class: 'bg-label-success' },
              2: { title: 'Unpaid', class: 'bg-label-secondary' }
            };
            return (
              '<span class="badge rounded-pill ' +
              statusObj[full['status']].class +
              '">' +
              statusObj[full['status']].title +
              '</span>'
            );
          }
        }
      ],
      order: [[3, 'desc']], // Default sorting on Tanggal column
      dom:
        '<"row"' +
        '<"col-md-6 d-flex align-items-center justify-content-start"<"dt-action-buttons"B>>' +
        '<"col-md-6"<"d-flex align-items-center justify-content-end"<"add-new">>>' +
        '>t' +
        '<"row"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
      buttons: [
        {
          extend: 'collection',
          className: 'btn btn-outline-secondary dropdown-toggle waves-effect waves-light me-2',
          text: '<span class="d-flex align-items-center"><i class="ri-upload-2-line ri-16px me-2"></i> <span class="d-none d-sm-inline-block">Export</span></span>',
          buttons: [
            {
              extend: 'print',
              text: '<i class="ri-printer-line me-1"></i>Print',
              className: 'dropdown-item'
            },
            {
              extend: 'csv',
              text: '<i class="ri-file-text-line me-1"></i>Csv',
              className: 'dropdown-item'
            },
            {
              extend: 'excel',
              text: '<i class="ri-file-excel-line me-1"></i>Excel',
              className: 'dropdown-item'
            },
            {
              extend: 'pdf',
              text: '<i class="ri-file-pdf-line me-1"></i>Pdf',
              className: 'dropdown-item'
            },
            {
              extend: 'copy',
              text: '<i class="ri-file-copy-line me-1"></i>Copy',
              className: 'dropdown-item'
            }
          ]
        }
      ]
    });
  }
});
