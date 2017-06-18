/*
*
*    Building a Charts Dashboard
*    ===========================
*
*    Google Apps Script tutorial
*
* Source  : https://developers.google.com/apps-script/articles/charts_dashboard
*
**/

// Populate the datas
function doGet() {
  var data = Charts.newDataTable()
      .addColumn(Charts.ColumnType.STRING, "Name")
      .addColumn(Charts.ColumnType.STRING, "Gender")
      .addColumn(Charts.ColumnType.NUMBER, "Age")
      .addColumn(Charts.ColumnType.NUMBER, "Donuts eaten")
      .addRow(["Michael", "Male", 12, 5])
      .addRow(["Elisa", "Female", 20, 7])
      .addRow(["Robert", "Male", 7, 3])
      .addRow(["John", "Male", 54, 2])
      .addRow(["Jessica", "Female", 22, 6])
      .addRow(["Aaron", "Male", 3, 1])
      .addRow(["Margareth", "Female", 42, 8])
      .addRow(["Miranda", "Female", 33, 6])
      .build();
  
  
// Create the charts and controls
  var ageFilter = Charts.newNumberRangeFilter()
      .setFilterColumnLabel("Age")
      .build();

  var genderFilter = Charts.newCategoryFilter()
      .setFilterColumnLabel("Gender")
      .build();

  var pieChart = Charts.newPieChart()
      .setDataViewDefinition(Charts.newDataViewDefinition()
                            .setColumns([0, 3]))
      .build();

  var tableChart = Charts.newTableChart()
      .build();
  
// Create and bind dashboard
    var dashboard = Charts.newDashboardPanel()
      .setDataTable(data)
      .bind([ageFilter, genderFilter], [pieChart, tableChart])
      .build();
  
// Create application and add dashboard 
   var uiApp = UiApp.createApplication();

  dashboard.add(uiApp.createVerticalPanel()
                .add(uiApp.createHorizontalPanel()
                    .add(ageFilter).add(genderFilter)
                    .setSpacing(70))
                .add(uiApp.createHorizontalPanel()
                    .add(pieChart).add(tableChart)
                    .setSpacing(10)));

  uiApp.add(dashboard);
  return uiApp;
}