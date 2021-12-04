#!/usr/bin/env node
const holiday = require("holiday-jp");
const exec = require("child_process").exec;
const figlet = require("figlet");

if (holiday.isHoliday(new Date())) {
  figlet("HOLIDAY today!", (err, data) => {
    console.log(data);
  });
}
