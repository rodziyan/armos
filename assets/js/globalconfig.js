document.addEventListener('DOMContentLoaded', function () {
  // Define the HTML content
  const companyDetailHTML = `
    <div id="company" class="content-section" style.display = "block">
      <div class="card mb-5" style="max-height: 450px; overflow-y: auto;">
        <h5 class="card-header">Detail Perusahaan</h5>
        <form class="card-body" action="app-company-management.html" method="get">
          <div class="row g-4">
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="text" id="companyName" class="form-control" placeholder="TechNova Solutions" />
                <label for="companyName">Company Name</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="text" id="legalName" class="form-control" placeholder="TechNova Solutions Inc." />
                <label for="legalName">Legal Name</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="text" id="contactPerson" class="form-control" placeholder="Alex Johnson" />
                <label for="contactPerson">Contact Person</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="text" id="companyAddress" class="form-control" placeholder="123 Innovation Drive, Suite 456" />
                <label for="companyAddress">Company Address</label>
              </div>
            </div>
            <div class="col-md-5">
                    <div class="form-floating form-floating-outline">
                        <select id="country" class="form-select" onchange="updateProvinces()">
                            <option value="">Pilih Negara</option>
                            <option value="ID">Indonesia</option>
                        </select>
                        <label for="country">Negara</label>
                    </div>
                </div>
                <!-- Dropdown Provinsi -->
                <div class="col-md-5">
                    <div class="form-floating form-floating-outline">
                        <select id="province" class="form-select" onchange="updateCities()">
                            <option value="">Pilih Provinsi</option>
                        </select>
                        <label for="province">Provinsi</label>
                    </div>
                </div>
                <!-- Dropdown Kabupaten/Kota -->
                <div class="col-md-5">
                    <div class="form-floating form-floating-outline">
                        <select id="city" class="form-select" onchange="updateDistricts()">
                            <option value="">Pilih Kota/Kabupaten</option>
                        </select>
                        <label for="city">Kota/Kabupaten</label>
                    </div>
                </div>
                <!-- Dropdown Kecamatan -->
                <div class="col-md-5">
                    <div class="form-floating form-floating-outline">
                        <select id="district" class="form-select" onchange="updateVillages()">
                            <option value="">Pilih Kecamatan</option>
                        </select>
                        <label for="district">Kecamatan</label>
                    </div>
                </div>
                <!-- Dropdown Kelurahan -->
                <div class="col-md-5">
                    <div class="form-floating form-floating-outline">
                        <select id="village" class="form-select">
                            <option value="">Pilih Kelurahan/Desa</option>
                        </select>
                        <label for="village">Kelurahan/Desa</label>
                    </div>
                </div>
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="tel" id="companyPhone" class="form-control" placeholder="021-12345678" />
                <label for="companyPhone">Company Phone</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="email" id="companyEmail" class="form-control" placeholder="info@technova.com" />
                <label for="companyEmail">Company Email</label>
              </div>
            </div>
          </div>
          <div class="pt-5">
            <a href="javascript:void(0)" class="btn btn-primary me-4">Save</a>
            <a href="javascript:void(0)" class="btn btn-outline-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  `;

  const systemSettingHTML = `
  <div id="system" class="content-section" style.display = "none">
    <div class="card mb-5">
      <h5 class="card-header">System Setting</h5>
      <form class="card-body" action="app-company-management.html" method="get">
        <div class="row g-4">
          <!-- Default Language -->
          <div class="col-md-4 mb-3">
            <label for="defaultLanguage" class="form-label">Default Language</label>
            <select class="form-select" id="defaultLanguage">
              <option value="id">Bahasa Indonesia</option>
              <!-- Tambahkan opsi lain di sini -->
            </select>
          </div>

          <!-- Locale -->
          <div class="col-md-4 mb-3">
            <label for="locale" class="form-label">Locale</label>
            <select class="form-select" id="locale">
              <option value="id_ID">id_ID</option>
              <!-- Tambahkan opsi lain di sini -->
            </select>
          </div>

          <!-- Time Zone -->
          <div class="col-md-4 mb-3">
            <label for="timeZone" class="form-label">Time Zone</label>
            <select class="form-select" id="timeZone">
              <option value="Asia/Jakarta">Asia/Jakarta</option>
              <!-- Tambahkan opsi lain di sini -->
            </select>
          </div>

          <!-- Date Format -->
          <div class="col-md-4 mb-3">
            <label for="dateFormat" class="form-label">Date Format</label>
            <select class="form-select" id="dateFormat">
              <option value="d/m/Y">dd/mm/yyyy</option>
              <option value="m/d/Y">mm/dd/yyyy</option>
            </select>
          </div>

          <!-- Time Format -->
          <div class="col-md-4 mb-3">
            <label for="timeFormat" class="form-label">Time Format</label>
            <select class="form-select" id="timeFormat">
              <option value="12">12-hour</option>
              <option value="24">24-hour</option>
            </select>
          </div>

          <!-- Money Format -->
          <div class="col-md-4 mb-3">
            <label for="moneyFormat" class="form-label">Money Format</label>
            <select class="form-select" id="moneyFormat">
              <option value="comma">1,000.00</option>
              <option value="dot">1.000,00</option>
            </select>
          </div>

          <!-- Allowed Files -->
          <div class="col-md-4 mb-3">
            <label for="allowedFiles" class="form-label">Allowed Files</label>
            <input type="text" class="form-control" id="allowedFiles" placeholder="Enter allowed file types">
          </div>

          <!-- Max File Size -->
          <div class="col-md-4 mb-3">
            <label for="maxFileSize" class="form-label">Max File Size (MB)</label>
            <input type="number" class="form-control" id="maxFileSize" placeholder="Enter max file size">
          </div>

          <!-- Submit Button -->
          <div class="pt-5">
            <a href="javascript:void(0)" class="btn btn-primary me-4">Save</a>
            <a href="javascript:void(0)" class="btn btn-outline-secondary">Cancel</a>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

  const orderManagementHTML = `
  <div id="order" class="content-section">
        <div class="card mb-4">
            <h5 class="card-header">Optimization Setting</h5>
            <form class="card-body" action="app-company-management.html" method="get">
                <div class="row g-4">
                    <!-- Order Cut Off Pagi -->
                    <div class="col-md-6 mb-3">
                        <label for="morningCutoff" class="form-label">Order Cut Off Pagi</label>
                        <input type="time" id="morningCutoff" class="form-control" value="" />
                    </div>
                    <!-- Order Cut Off Siang -->
                    <div class="col-md-6 mb-3">
                        <label for="afternoonCutoff" class="form-label">Order Cut Off Siang</label>
                        <input type="time" id="afternoonCutoff" class="form-control" value="" />
                    </div>
                    <!-- Save button -->
                    <div class="col-md-12 pt-3">
                        <button type="submit" class="btn btn-primary me-4">Save</button>
                        <a href="javascript:void(0)" class="btn btn-outline-secondary">Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  `;

  const routeMeHTML = `
  <div id="route" class="content-section">
        <div class="card mb-5" style="max-height: 450px; overflow-y: auto;">
            <h5 class="card-header">Integration Settings</h5>
            <form class="card-body" action="app-integration-management.html" method="get">
                <div class="row g-4">
                    <!-- Route For Me Integration -->
                    <div class="col-md-12 mb-3">
                        <label for="routeForMeKey" class="form-label">Route For Me Key</label>
                        <input type="text" class="form-control" id="routeForMeKey" placeholder="Masukkan Route For Me Key" />
                    </div>
                    <!-- WMS Integration -->
                    <div class="col-md-12 mb-3">
                        <label for="wmsKey" class="form-label">WMS Key</label>
                        <input type="text" class="form-control" id="wmsKey" placeholder="Masukkan WMS Key" />
                    </div>
                    <!-- SQL Integration -->
                    <div class="col-md-12 mb-3">
                        <label for="sqlKey" class="form-label">SQL Key</label>
                        <input type="text" class="form-control" id="sqlKey" placeholder="Masukkan SQL Key" />
                    </div>
                    <!-- Firebase Integration -->
                    <div class="col-md-12 mb-3">
                        <label for="firebaseKey" class="form-label">Firebase Key</label>
                        <input type="text" class="form-control" id="firebaseKey" placeholder="Masukkan Firebase Key" />
                    </div>
                    <!-- Save and Cancel buttons -->
                    <div class="pt-4">
                        <a href="javascript:void(0)" class="btn btn-primary me-4" onclick="saveIntegrationSettings()">Save</a>
                        <a href="javascript:void(0)" class="btn btn-outline-secondary" onclick="cancelIntegrationSettings()">Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
`;

  // Function to show a section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }

    // Update active state in sidebar
    document.querySelectorAll('.email-filter-folders li').forEach(item => {
      item.classList.remove('active');
    });
    const activeItem = document.querySelector(`[data-target="${sectionId}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }

  // Add all HTML content to the content area
  const contentArea = document.querySelector('.app-email-content .container.mt-5');
  if (contentArea) {
    contentArea.innerHTML = companyDetailHTML + systemSettingHTML + orderManagementHTML + routeMeHTML;
  }

  // Show initial section
  const initialSection = 'company';
  showSection(initialSection);

  // Attach event listeners to sidebar items
  document.querySelectorAll('.email-filter-folders li').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      showSection(targetId);
    });
  });
});
