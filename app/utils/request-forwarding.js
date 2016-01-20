/**
 * Copyright (c) 2015 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

var config = require('../config/config'),
    rh = require('./request-helpers');

function ccForward(req, path, options) {
    var hostname = config.getCfApi();
    return rh.getPipedRequest(req, hostname, path, options);
}

function agForward(req, path, options) {
    var hostname = config.getAuthGatewayHost();
    return rh.getPipedRequest(req, hostname, path, options);
}

module.exports = {
    ccForward: ccForward,
    agForward: agForward
};