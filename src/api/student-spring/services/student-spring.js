'use strict';

/**
 * student-spring service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-spring.student-spring');
