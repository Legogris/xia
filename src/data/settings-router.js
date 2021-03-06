/*jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

import Constant from "@/data/const.js";

import Overview from "@/views/Settings/Overview.vue";
import Profile from "@/views/Settings/Profile.vue";
import Notification from "@/views/Settings/Notification.vue";
import Preview from "@/views/Settings/Preview.vue";

export default [
  {
    path: "",
    name: Constant.ROUTER_TAG_SETTINGS_OVERVIEW,
    component: Overview,
  },
  {
    path: "profile",
    name: Constant.ROUTER_TAG_SETTINGS_PROFILE,
    component: Profile,
  },
  {
    path: "notification",
    name: Constant.ROUTER_TAG_SETTINGS_NOTIFICATION,
    component: Notification,
  },
  {
    path: "preview",
    name: Constant.ROUTER_TAG_SETTINGS_PREVIEW,
    component: Preview,
  },
];
