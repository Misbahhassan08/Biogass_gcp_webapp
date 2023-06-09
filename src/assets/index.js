import lossgo from "./logo/acenxion.png"
import Reportone from "./reports-images/reportimg1.jpg"
import Reporttwo from "./reports-images/reportimg2.jpg"
import Reportthree from "./reports-images/reportimg3.jpg"
import Reportfour from "./reports-images/reportimg4.jpg"
import Reportfive from "./reports-images/reportimg5.jpg"
import Reportsix from "./reports-images/reportimg6.jpg"

import Orderone from "./order-images/cassettes.jpg"
import Ordertwo from "./order-images/reader.jpg"
import Orderthree from "./order-images/cassettes.jpg"

import CassetteSliderone from "./order-images/cassettes.jpg"
import CassetteSlidertwo from "./order-images/cassettes.jpg"
import CassetteSliderthree from "./order-images/cassettes.jpg"


import eveve from "./sidebar-icons/mdi-light_ereader.svg"

import MaintenanceOne from "./maintenance-icons/maintenance-1.svg"
import MaintenanceTwo from "./maintenance-icons/maintenance-2.svg"
import MaintenanceThree from "./maintenance-icons/alert.svg"
import MaintenanceFour from "./maintenance-icons/maintenance-1.svg"
import MaintenanceFive from "./maintenance-icons/maintenance-2.svg"
import MaintenanceSix from "./maintenance-icons/maintenance-3.svg"

import SystemSetupOne from "./systemsetup-icons/eos-icons_ip.svg"
import SystemSetupTwo from "./systemsetup-icons/ic_baseline-business-center.svg"
import SystemSetupThree from "./systemsetup-icons/info.svg"

import SystemSetupIpOne from "./systemsetup-icons/ip/ip-icon.svg"
import SystemSetupIpTwo from "./systemsetup-icons/ip/location-icon.svg"
import SystemSetupIpThree from "./systemsetup-icons/ip/firewall-icon.svg"

import readerpopup from "./reader/bi_question-diamond.svg"


const Images = {
    headLogo: lossgo,
    support : require("./images/support-agent.svg").default,
    firsticon: eveve,
    secondicon: require('./sidebar-icons/Cassette.svg').default,
    thirdicon: require('./sidebar-icons/Maintenance.svg').default,
    fourthicon: require('./sidebar-icons/Reports.svg').default,
    fifthicon: require('./sidebar-icons/Order.svg').default,
    sixthicon: require('./sidebar-icons/System Set-Up.svg').default,
}

const MaintenanceIcons = {
    one: MaintenanceOne,
    two: MaintenanceTwo,
    three: MaintenanceThree,
    four: MaintenanceFour,
    five: MaintenanceFive,
    six: MaintenanceSix,
}

const SystemSetupIcons = {
    one: SystemSetupOne,
    two: SystemSetupTwo,
    three: SystemSetupThree,
}

const SystemSetupIp = {
    one: SystemSetupIpOne,
    two: SystemSetupIpTwo,
    three: SystemSetupIpThree,
}

const ReportsImages = {
    one: Reportone,
    two: Reporttwo,
    three: Reportthree,
    four: Reportfour,
    five: Reportfive,
    six: Reportsix,
}

const OrderImages = {
    one: Orderone,
    two: Ordertwo,
    three: Orderthree,
}

const CassetteSlider = {
    one: CassetteSliderone,
    two: CassetteSlidertwo,
    three: CassetteSliderthree,
}


export default {Images,MaintenanceIcons,ReportsImages,OrderImages,SystemSetupIcons,SystemSetupIp,CassetteSlider,readerpopup};