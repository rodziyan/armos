document.addEventListener('DOMContentLoaded', function () {
  // Define the HTML content
  const companyDetailHTML = `
    <div id="company" class="content-section" style.display = "block">
      <div class="card mb-5">
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
                <select id="country" class="form-select select2" data-allow-clear="true">
                  <option value="">Select Country</option>
                  <option>Indonesia</option>
                  <option>USA</option>
                  <option>Germany</option>
                  <option>Japan</option>
                  <option>Brazil</option>
                </select>
                <label for="country">Country</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-floating form-floating-outline">
                <input type="text" id="city" class="form-control" placeholder="Jakarta" />
                <label for="city">City</label>
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
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
              <!-- Tambahkan opsi lain di sini -->
            </select>
          </div>

          <!-- Locale -->
          <div class="col-md-4 mb-3">
            <label for="locale" class="form-label">Locale</label>
            <select class="form-select" id="locale">
              <option value="en_US">en_US</option>
              <option value="id_ID">id_ID</option>
              <!-- Tambahkan opsi lain di sini -->
            </select>
          </div>

          <!-- Time Zone -->
          <div class="col-md-4 mb-3">
            <label for="timeZone" class="form-label">Time Zone</label>
            <select class="form-select" id="timeZone">
              <option value="Asia/Jakarta">Asia/Jakarta</option>
              <option value="Asia/Singapore">Asia/Singapore</option>
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
  <div id="order" class="content-section" style.display = "none">
    <div class="card mb-4" style="max-height: 480px; overflow-y: auto;">
      <h5 class="card-header">Order Management Settings</h5>
      <form class="card-body" action="app-company-management.html" method="get">
        <div class="row g-4">
          <!-- Deposit Prefix -->
          <div class="col-md-4 mb-3">
            <label for="depositPrefix" class="form-label">Deposit Prefix *</label>
            <input type="text" id="depositPrefix" class="form-control" value="" />
          </div>
          <!-- Deposit Start Number -->
          <div class="col-md-4 mb-3">
            <label for="depositStartNo" class="form-label">Deposit Start No *</label>
            <input type="number" id="depositStartNo" class="form-control" value="" />
          </div>
          <!-- Deposit Number Format -->
          <div class="col-md-12 mb-3">
            <label for="depositNumberFormat" class="form-label">Deposit Number Format</label>
            <input type="text" id="depositNumberFormat" class="form-control" value="" />
            <small class="form-text text-muted">
              Example: [DEP1] = Deposit Prefix, [yyyy] = 'Current Year (2024)', [yy] = 'Current Year (24)', [mm] = 'Current Month (Aug)', [m] = 'Current Month (08)', [dd] = 'Current Date (11)', [number] = 'Invoice Number (0001)'
            </small>
          </div>
          <!-- Expense Prefix -->
          <div class="col-md-4 mb-3">
            <label for="expensePrefix" class="form-label">Expense Prefix *</label>
            <input type="text" id="expensePrefix" class="form-control" value="" />
          </div>
          <!-- Expense Start Number -->
          <div class="col-md-4 mb-3">
            <label for="expenseStartNo" class="form-label">Expense Start No *</label>
            <input type="number" id="expenseStartNo" class="form-control" value="" />
          </div>
          <!-- Expense Number Format -->
          <div class="col-md-12 mb-3">
            <label for="expenseNumberFormat" class="form-label">Expense Number Format</label>
            <input type="text" id="expenseNumberFormat" class="form-control" value="" />
            <small class="form-text text-muted">
              Example: [EX] = Expense Prefix, [yyyy] = 'Current Year (2024)', [yy] = 'Current Year (24)', [mm] = 'Current Month (Aug)', [m] = 'Current Month (08)', [dd] = 'Current Date (11)', [number] = 'Invoice Number (0001)'
            </small>
          </div>
          <!-- Save button -->
          <div class="col-md-12 pt-3">
            <a href="javascript:void(0)" class="btn btn-primary me-4">Save</a>
            <a href="javascript:void(0)" class="btn btn-outline-secondary">Cancel</a>
          </div>
        </div>
      </form>
    </div>
  </div>
  `;

  const routeMeHTML = `
  <div id="route" class="content-section" style.display = "none">
  <div class="card mb-5">
    <h5 class="card-header">Route for Me Setting</h5>
    <form class="card-body" action="app-company-management.html" method="get">
      <div class="row g-4">
        <!-- Default Route Start -->
        <div class="col-md-6 mb-3">
          <label for="defaultRouteStart" class="form-label">Default Route Start</label>
          <input type="text" class="form-control" id="defaultRouteStart" placeholder="Your default start location" />
        </div>
        <!-- Default Route End -->
        <div class="col-md-6 mb-3">
          <label for="defaultRouteEnd" class="form-label">Default Route End</label>
          <input type="text" class="form-control" id="defaultRouteEnd" placeholder="Your default end location" />
        </div>
        <!-- Avoid Routes -->
        <div class="col-md-6 mb-3">
          <label for="avoidRoutes" class="form-label">Avoid Routes</label>
          <input type="text" class="form-control" id="avoidRoutes" placeholder="Routes to avoid (comma-separated)" />
        </div>
        <!-- Transportation Mode -->
        <div class="col-md-6 mb-3">
          <label for="transportationMode" class="form-label">Transportation Mode</label>
          <select class="form-select" id="transportationMode">
            <option value="driving">Driving</option>
            <option value="walking">Walking</option>
            <option value="bicycling">Bicycling</option>
            <option value="transit">Transit</option>
          </select>
        </div>
        <!-- Route Preference -->
        <div class="col-md-6 mb-3">
          <label for="routePreference" class="form-label">Route Preference</label>
          <select class="form-select" id="routePreference">
            <option value="fastest">Fastest</option>
            <option value="shortest">Shortest</option>
            <option value="scenic">Scenic</option>
          </select>
        </div>
      <!-- Enable Route Notifications -->
          <div class="col-md-6 mb-3" style="margin-top: 3.5rem;">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="Enable Route Notifications">
              <label class="form-check-label" for="Enable Route Notifications">Enable Route Notifications</label>
            </div>
          </div>
      <div class="pt-5">
        <a href="javascript:void(0)" class="btn btn-primary me-4" onclick="saveRouteSettings()">Save</a>
        <a href="javascript:void(0)" class="btn btn-outline-secondary" onclick="cancelRouteSettings()">Cancel</a>
      </div>
    </form>
  </div>
</div>
`;

  const wmsIntegrationHTML = `
    <div id="wms" class="content-section" style.display = "none">
    <div class="card mb-5">
      <h5 class="card-header">WMS Integration Setting</h5>
      <form class="card-body" action="app-company-management.html" method="get">
        <div class="row g-4">
          <!-- WMS URL -->
          <div class="col-md-6 mb-3">
            <label for="wmsUrl" class="form-label">WMS URL</label>
            <input type="url" class="form-control" id="wmsUrl" placeholder="Enter WMS URL" />
          </div>
          <!-- API Key -->
          <div class="col-md-6 mb-3">
            <label for="apiKey" class="form-label">API Key</label>
            <input type="text" class="form-control" id="apiKey" placeholder="Enter API Key" />
          </div>
          <!-- Warehouse Code -->
          <div class="col-md-6 mb-3">
            <label for="warehouseCode" class="form-label">Warehouse Code</label>
            <input type="text" class="form-control" id="warehouseCode" placeholder="Enter Warehouse Code" />
          </div>
          <!-- Sync Interval -->
          <div class="col-md-6 mb-3">
            <label for="syncInterval" class="form-label">Sync Interval (min)</label>
            <input type="number" class="form-control" id="syncInterval" placeholder="Sync Interval in minutes" />
          </div>
          <!-- Enable WMS Integration -->
          <div class="col-md-6 mb-3">
            <label for="enableWMSIntegration" class="form-label">Enable WMS Integration</label>
            <input type="checkbox" id="enableWMSIntegration" />
          </div>
        </div>
        <div class="pt-5">
          <a href="javascript:void(0)" class="btn btn-primary me-4" onclick="saveWMSSettings()">Save</a>
          <a href="javascript:void(0)" class="btn btn-outline-secondary" onclick="cancelWMSSettings()">Cancel</a>
        </div>
      </form>
    </div>
  </div>
  `;

  const sqlIntegrationHTML = `
    <div id="sql" class="content-section" style.display = "none">
      <div class="card mb-5">
        <h5 class="card-header">SQL Integration Setting</h5>
        <form class="card-body" action="app-sql-integration.html" method="get">
          <div class="row g-4">
            <!-- SQL Server Host -->
            <div class="col-md-6 mb-3">
              <label for="sqlServerHost" class="form-label">SQL Server Host</label>
              <input type="text" class="form-control" id="sqlServerHost" placeholder="Enter SQL Server Host" />
            </div>
            <!-- SQL Server Port -->
            <div class="col-md-6 mb-3">
              <label for="sqlServerPort" class="form-label">SQL Server Port</label>
              <input type="number" class="form-control" id="sqlServerPort" placeholder="Enter SQL Server Port" />
            </div>
            <!-- Database Name -->
            <div class="col-md-6 mb-3">
              <label for="databaseName" class="form-label">Database Name</label>
              <input type="text" class="form-control" id="databaseName" placeholder="Enter Database Name" />
            </div>
            <!-- Username -->
            <div class="col-md-6 mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter Username" />
            </div>
            <!-- Password -->
            <div class="col-md-6 mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter Password" />
            </div>
            <!-- Connection Timeout -->
            <div class="col-md-6 mb-3">
              <label for="connectionTimeout" class="form-label">Connection Timeout (sec)</label>
              <input type="number" class="form-control" id="connectionTimeout" placeholder="Enter Timeout in seconds" />
            </div>
            <!-- Enable SQL Integration -->
            <div class="col-md-6 mb-3">
              <label for="enableSQLIntegration" class="form-label">Enable SQL Integration</label>
              <input type="checkbox" id="enableSQLIntegration" />
            </div>
          </div>
          <div class="pt-5">
            <a href="javascript:void(0)" class="btn btn-primary me-4" onclick="saveSQLSettings()">Save</a>
            <a href="javascript:void(0)" class="btn btn-outline-secondary" onclick="cancelSQLSettings()">Cancel</a>
          </div>
        </form>
      </div>
    </div>
    `;

  const firebaseSettingsHTML = `
    <div id="firebase" class="content-section" style.display = "none">
      <div class="card mb-5">
        <h5 class="card-header">Firebase Setting</h5>
        <form class="card-body" action="app-firebase-management.html" method="get">
          <div class="row g-4">
            <!-- Firebase Project ID -->
            <div class="col-md-6 mb-3">
              <label for="firebaseProjectId" class="form-label">Firebase Project ID</label>
              <input type="text" class="form-control" id="firebaseProjectId" placeholder="Enter Firebase Project ID" />
            </div>
            <!-- Firebase Web API Key -->
            <div class="col-md-6 mb-3">
              <label for="firebaseWebApiKey" class="form-label">Firebase Web API Key</label>
              <input type="text" class="form-control" id="firebaseWebApiKey" placeholder="Enter Firebase Web API Key" />
            </div>
            <!-- Firebase Auth Domain -->
            <div class="col-md-6 mb-3">
              <label for="firebaseAuthDomain" class="form-label">Firebase Auth Domain</label>
              <input type="text" class="form-control" id="firebaseAuthDomain" placeholder="Enter Firebase Auth Domain" />
            </div>
            <!-- Firebase Database URL -->
            <div class="col-md-6 mb-3">
              <label for="firebaseDatabaseUrl" class="form-label">Firebase Database URL</label>
              <input type="text" class="form-control" id="firebaseDatabaseUrl" placeholder="Enter Firebase Database URL" />
            </div>
            <!-- Firebase Storage Bucket -->
            <div class="col-md-6 mb-3">
              <label for="firebaseStorageBucket" class="form-label">Firebase Storage Bucket</label>
              <input type="text" class="form-control" id="firebaseStorageBucket" placeholder="Enter Firebase Storage Bucket" />
            </div>
            <!-- Firebase Messaging Sender ID -->
            <div class="col-md-6 mb-3">
              <label for="firebaseMessagingSenderId" class="form-label">Firebase Messaging Sender ID</label>
              <input type="text" class="form-control" id="firebaseMessagingSenderId" placeholder="Enter Firebase Messaging Sender ID" />
            </div>
            <!-- Firebase App ID -->
            <div class="col-md-6 mb-3">
              <label for="firebaseAppId" class="form-label">Firebase App ID</label>
              <input type="text" class="form-control" id="firebaseAppId" placeholder="Enter Firebase App ID" />
            </div>
            <!-- Enable Firebase Integration -->
            <div class="col-md-6 mb-3">
              <label for="enableFirebaseIntegration" class="form-label">Enable Firebase Integration</label>
              <input type="checkbox" id="enableFirebaseIntegration" />
            </div>
          </div>
          <div class="pt-5">
            <a href="javascript:void(0)" class="btn btn-primary me-4" onclick="saveFirebaseSettings()">Save</a>
            <a href="javascript:void(0)" class="btn btn-outline-secondary" onclick="cancelFirebaseSettings()">Cancel</a>
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
    contentArea.innerHTML =
      companyDetailHTML +
      systemSettingHTML +
      orderManagementHTML +
      routeMeHTML +
      wmsIntegrationHTML +
      sqlIntegrationHTML +
      firebaseSettingsHTML;
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
