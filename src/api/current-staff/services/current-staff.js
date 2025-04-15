'use strict';

/**
 * current-staff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-staff.current-staff');
