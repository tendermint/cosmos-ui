/* globals jest */
require("moment")
const mockMomentTz = require("moment-timezone")
jest.mock("moment", () => time => mockMomentTz(time).tz("Etc/UTC"))

const DATE_TO_USE = new Date(Date.UTC(1970, 0, 1, 2, 3, 42))

global._Date = Date
global.Date = jest.fn(() => new global._Date(DATE_TO_USE.toISOString()))
Date.now = jest.fn(() => DATE_TO_USE.getTime())
