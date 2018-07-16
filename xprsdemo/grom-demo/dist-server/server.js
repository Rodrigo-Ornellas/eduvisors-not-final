'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _data = require('./data');

var _notifier = require('./notifier');

var _notifier2 = _interopRequireDefault(_notifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8102;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('eduvisors.db');

app.listen(PORT, function () {
  return console.log('Server started at http://localhost:' + PORT);
});

// const notifier = new Notifier();
// const server = http.createServer(app);
// server.listen(PORT);
// notifier.listen(server);

// console.log(`Server started at http://localhost:${PORT}`);

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// ------------------------------------
//         test middleware
// ------------------------------------
app.get('/api/test', function (req, res) {
  db.all("SELECT * from profile;", function (err, rows) {
    res.json(rows);
  });
});
// ------------------------------------

// addNotifier(
//   'task',
//   (task) => {
//     // this can be invoked multiple times as new requests happen
//     notifier.test((request) => {
//       // we should skip notify if the id of the task does not match the payload
//       if (request.path === '/api/task/:id' && request.params.id !== task.id) {
//         return false;
//       }
//       return true;
//     });
//   }
// );
//
// notifier.use('/api/task', () => getTasks());
// notifier.use('/api/task/:id', param => (
//   getTask(param.id).then((result) => {
//     if (!result.task) {
//       return Promise.reject({ statusCode: 404, message: 'Not Found' });
//     }
//     return Promise.resolve(result);
//   })
// ));
//
// const app = express()
//   .use(compression())
//   .use(cookieParser())
//   .use(morgan('tiny'))
//   .use(bodyParser.json());

// REST API
// app.use('/api', api);

// UI
// app.use('/', express.static(path.join(__dirname, '/../dist')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
// });

// const server = http.createServer(app);
// server.listen(PORT);
// notifier.listen(server);
//
// console.log(`Server started at http://localhost:${PORT}`);


// ========================================

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ====================================================
//          VARIABLE DECLARATION
// ====================================================
app.locals.data;

// ====================================================
//          USER VARIABLE DECLARATION
//          integrated into Survey, Profile and Rankings Commponents
// ====================================================

app.locals.user = {
  id: 1,
  email: 'bb@bb.com'

  // ====================================================

};function schoolMatchingAlgo(data, total_score, multiplier_at, multiplier_rain, multiplier_snow, o_w, o_emp, o_tui, o_col, o_rank) {
  var obj = [];
  // console.log(15, data);
  //console.log(16, data.name);

  for (var i = 0; i < data.length; i++) {
    var schoolID = data[i].id;
    var institutionName = data[i].name;
    var province = data[i].province;
    var r_at = parseFloat(data[i].r_at);
    var r_snow = parseFloat(data[i].r_snow);
    var r_rain = parseFloat(data[i].r_rain);
    var c_weather = r_at * multiplier_at + r_rain * multiplier_rain + r_snow * multiplier_snow;
    //console.log(c_weather);
    var score = c_weather * Math.pow(2, o_w) + data[i].c_emp * Math.pow(2, o_emp) + data[i].c_tui * Math.pow(2, o_tui) + data[i].c_col * Math.pow(2, o_col) + data[i].c_rank * Math.pow(2, o_rank);
    //console.log(1, score);
    //console.log(120, institutionName);


    var newObj = {
      institutionName: institutionName,
      province: province,
      actualScore: score,
      calculatedScore: Math.abs(score - total_score).toFixed(3),
      schoolID: schoolID
    };
    obj.push(newObj);
  } // end of FOR LOOP


  //console.log(obj[0]);
  obj.sort(function (a, b) {
    return parseFloat(a.calculatedScore) - parseFloat(b.calculatedScore);
  }); // end of OBJ.SORT

  var obj2 = [];
  for (var _i = 0; _i < 5; _i++) {
    // console.log(999999, obj[i]);
    obj2.push(obj[_i]);
  } // end of FOR LOOP

  return obj2;
  //console.log(100, obj[0]);
} // end of schoolMatchingAlgo

function scoreCalculator(data) {
  //  console.log("data", data)
  var c_at = 0;
  var c_rain = 0;
  var c_snow = 0;
  var c_emp = 0;
  var c_tui = 0;
  var c_col = 0;
  var c_rank = 0;
  var o_w = 0;
  var o_col = 0;
  var o_tui = 0;
  var o_rank = 0;
  var o_emp = 0;
  var o_at = 0;
  var o_rain = 0;
  var o_snow = 0;
  var multiplier_at = 0;
  var multiplier_rain = 0;
  var multiplier_snow = 0;

  //console.log(data);
  c_at = parseFloat(data.c_at);
  c_rain = parseFloat(data.c_rain);
  c_snow = parseFloat(data.c_snow);
  c_emp = parseFloat(data.c_emp);
  c_tui = parseFloat(data.c_tui);
  c_col = parseFloat(data.c_col);
  c_rank = parseFloat(data.c_rank);
  o_w = parseFloat(data.o_w);
  o_col = parseFloat(data.o_col);
  o_tui = parseFloat(data.o_tui);
  o_rank = parseFloat(data.o_rank);
  o_emp = parseFloat(data.o_emp);
  o_at = parseFloat(data.o_at);
  o_rain = parseFloat(data.o_rain);
  o_snow = parseFloat(data.o_snow);

  //console.log(o_snow);

  var weather_score = c_at * Math.pow(2, o_at) + c_rain * Math.pow(2, o_rain) + c_snow * Math.pow(2, o_snow);

  if (o_at == 1) {
    multiplier_at = 0.5;
  } else if (o_at == 2) {
    multiplier_at = 0.3;
  } else if (o_at == 3) {
    multiplier_at = 0.2;
  }

  if (o_rain == 1) {
    multiplier_rain = 0.5;
  } else if (o_rain == 2) {
    multiplier_rain = 0.3;
  } else if (o_rain == 3) {
    multiplier_rain = 0.2;
  }

  if (o_snow == 1) {
    multiplier_snow = 0.5;
  } else if (o_snow == 2) {
    multiplier_snow = 0.3;
  } else if (o_snow == 3) {
    multiplier_snow = 0.2;
  }

  var weather_score2 = c_at * multiplier_at + c_rain * multiplier_rain + c_snow * multiplier_snow;
  console.log("equation:" + c_at + "*" + multiplier_at + "+" + c_rain + "*" + multiplier_rain + c_snow + "*" + multiplier_snow);
  console.log(19000, weather_score2);

  var total_score = weather_score2 * Math.pow(2, o_w) + c_emp * Math.pow(2, o_emp) + c_tui * Math.pow(2, o_tui) + c_col * Math.pow(2, o_col) + c_rank * Math.pow(2, o_rank);
  console.log(20000, total_score);

  var arr2 = [];
  var schoolNames = [];

  var test = new Promise(function (resolve, reject) {
    db.each("SELECT * FROM school_rank_test", function (err, row) {
      arr2.push(row);
    }, function () {
      schoolNames = schoolMatchingAlgo(arr2, total_score, multiplier_at, multiplier_rain, multiplier_snow, o_w, o_emp, o_tui, o_col, o_rank);
      // console.log(20199999999, schoolNames[0]);
      resolve(schoolNames);
    });
    // console.log(12000, schoolNames[0]);
  });
  return test;
  //console.log(1400, test);
}

// ====================================================
//             COST of LIVING Component
// ====================================================
app.get('/api/cost_living', function (req, res) {

  db.all("SELECT * FROM cost_living", function (err, rows) {
    console.log(rows);
    res.json(rows);
  });
});

// ====================================================
//             FIELD of STUDY Component
// ====================================================
app.get('/api/field_study', function (req, res) {
  var rows = "";

  db.all("SELECT * FROM field_study", function (err, rows) {
    res.json(rows);
  });
});

// ====================================================
//             PROFILE  Component
// ====================================================

app.get('/api/profile', function (req, res) {

  db.all('SELECT profile.*, level_education.full_name AS ledu, field_study.full_name AS fs FROM profile LEFT JOIN level_education ON profile.lvl_educ = level_education.short LEFT JOIN field_study ON profile.field_study = field_study.short WHERE level_education.short=profile.lvl_educ AND field_study.short=profile.field_study AND\n    profile.id=' + app.locals.user.id + ';', function (err, rows) {
    console.log(rows);
    res.json(rows);
  });
});

// ====================================================
//             COMPLETION Component
// ====================================================
app.get('/api/profileCompletion', function (req, res) {
  db.all("SELECT * FROM profileCompletion", function (err, rows) {
    res.json(rows);
  });
});

// ====================================================
//             SCHOOL Component
// ====================================================

app.post('/api/schoolProf', function (req, res) {
  var id = req.body.schoolID;

  app.get('/api/signup', function (req, res) {
    db.all('SELECT institute_rank.* FROM institute_rank LEFT JOIN school_rank_test ON school_rank_test.name = institute_rank.institution_name WHERE school_rank_test.id=\'' + id + '\';', function (err, rows) {
      res.json(rows);
    });
  }); // end of SIGNUP
}); // end of POST

// ====================================================
//              COST of TUITION Component
// ====================================================
app.get('/api/costoftuition', function (req, res) {

  db.all("select id, province, education from cost_living", function (err, rows) {
    res.json(rows);
  });
});

// ====================================================
//              REGISTER Component
// ====================================================
// app.post('/api/register', (req, res) => {
//     res.json(req.body);
// });

// ====================================================
//              RANKINGS Component
// ====================================================
app.get('/api/rankings', function (req, res) {
  var arr = [];
  var arr2 = [];
  var schoolNames = [];

  db.each('SELECT * FROM profile_advanced WHERE email = \'' + app.locals.user.email + '\'', function (err, row) {
    arr2 = row;
    schoolNames = scoreCalculator(arr2);
  }, function () {
    schoolNames.then(function (schoolNames) {
      // console.log(1102, schoolNames);
      res.json(schoolNames);
    });
  });
});

// ====================================================
//              PROVINCE Component
// ====================================================
app.get('/api/province/:province', function (req, res) {
  var rows = "";

  // PROVINCE in all CAPITAL LETTERS
  req.params.province = req.params.province.toUpperCase();

  db.all('SELECT full_name FROM province WHERE short=\'' + req.params.province + '\';', function (err, rows) {
    //console.log(100, rows);
    //console.log(200, err);
    res.json(rows[0]);
  });
});

// ====================================================
//              SNOWFALL Component
// ====================================================
app.locals.conta = 0;
app.get('/api/snowfall/:province/:type', function (req, res) {
  var rows = "";

  // PROVINCE in all CAPITAL LETTERS
  req.params.province = req.params.province.toUpperCase();

  // TYPE - capitalize only FIRST letter
  req.params.type = req.params.type.toLowerCase();

  // TABLE in all LOWER CASE
  //req.params.table = req.params.table.toLowerCase();

  console.log(req.params.type);

  db.all('SELECT jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec FROM weather WHERE type = \'' + req.params.type + '\' AND province=\'' + req.params.province + '\';', function (err, rows) {
    //app.locals.snowfall = rows;
    //app.locals.province = rows.province;
    // console.log(100, rows);
    //console.log(200, err);
    // app.locals.conta = app.locals.conta + 1;
    // console.log(`data fetched > ${app.locals.conta}`)
    res.json(rows);
  });
});

// ====================================================
//              STOREDATA FROM SURVEY 1 Component
// ====================================================
app.post('/api/storeUserDataSurvey1', function (req, res) {
  console.log(11111, req.body.at);
  var at = parseFloat(req.body.at);
  var snow = parseFloat(req.body.snow);
  var rain = parseFloat(req.body.rain);

  console.log(at, snow, rain);

  db.run('UPDATE profile_advanced set c_at = ' + at + ', c_snow = ' + snow + ', c_rain = ' + rain + ' WHERE email = \'' + app.locals.user.email + '\';');

  console.log(111112, at);
  res.json(at);
});

// ====================================================
//              STOREDATA FROM SURVEY 2 Component
// ====================================================
app.post('/api/storeUserDataSurvey2', function (req, res) {
  var o_at = parseFloat(req.body.o_at);
  var o_snow = parseFloat(req.body.o_snow);
  var o_rain = parseFloat(req.body.o_rain);

  console.log(o_at, o_snow, o_rain);
  db.run('UPDATE profile_advanced set o_at = ' + o_at + ', o_snow = ' + o_snow + ', o_rain = ' + o_rain + ' WHERE email = \'' + app.locals.user.email + '\';');

  console.log(111112, o_at);
  res.json(o_at);
});

// ====================================================
//              STOREDATA FROM SURVEY 3 Component
// ====================================================
app.post('/api/storeUserDataSurvey3', function (req, res) {
  var c_tui = parseFloat(req.body.tui);
  var c_col = parseFloat(req.body.col);
  var c_rank = parseFloat(req.body.rank);
  var c_emp = parseFloat(req.body.emp);

  console.log(c_tui, c_col, c_rank, c_emp);
  db.run('UPDATE profile_advanced set c_tui = ' + c_tui + ', c_col = ' + c_col + ', c_rank = ' + c_rank + ', c_emp = ' + c_emp + ' WHERE email = \'' + app.locals.user.email + '\';');
  res.json(c_tui);
});

// ====================================================
//              STOREDATA FROM SURVEY 4 Component
// ====================================================
app.post('/api/storeUserDataSurvey4', function (req, res) {
  var o_w = parseFloat(req.body.o_w);
  var o_tui = parseFloat(req.body.o_tui);
  var o_col = parseFloat(req.body.o_col);
  var o_rank = parseFloat(req.body.o_rank);
  var o_emp = parseFloat(req.body.o_emp);

  console.log(o_w, o_tui, o_col, o_rank, o_emp);
  db.run('UPDATE profile_advanced set o_w = ' + o_w + ', o_tui = ' + o_tui + ', o_col = ' + o_col + ', o_rank = ' + o_rank + ', o_emp = ' + o_emp + ' WHERE email = \'' + app.locals.user.email + '\';');
  res.json(o_w);
});

// ====================================================
//              WEATHER Component
// ====================================================
app.locals.weather = {
  datasets: [{
    label: '',
    data: []
  }]
};

app.get('/api/weather/:province', function (req, res) {
  var rows = "";
  console.log(req.params);
  // PROVINCE in all CAPITAL LETTERS
  req.params.province = req.params.province.toUpperCase();

  console.log(req.params);
  db.all('SELECT type AS label, jan AS Jan, feb as Feb, mar AS Mar, apr AS Apr, may AS May, jun AS Jun, jul AS Jul, aug as Aug, sep AS Sep, oct AS Oct, nov AS Nov, dec AS Dec FROM weather WHERE province=\'' + req.params.province + '\' AND (type=\'snow\' OR type = \'rain\' OR type=\'temp_avg\');', function (err, rows) {
    console.log('WEATHER SERVER > ', rows, err);
    for (var j = 0; j < 3; j++) {
      for (var i in rows[j]) {
        if (i == 'label') {
          app.locals.weather[j].datasets.label = i.value;
        } else {
          app.locals.weather[j].datasets.data.push(i.value);
        }
      }
    }
    console.log(app.locals.weather);
    res.json(rows);
  });
});
//# sourceMappingURL=server.js.map