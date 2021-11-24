const holiday = require("holiday-jp");
const exec = require("child_process").exec;

if (holiday.isHoliday(new Date())) {
  exec("figlet HOLIDAY today!", (err, stdout, stderr) => {
    console.log(stdout);
  });
}
