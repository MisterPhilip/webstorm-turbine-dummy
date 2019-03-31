/*
 * Reactor Turbine Dummy for WebStorm, Philip Lawrence
 * https://github.com/MisterPhilip/webstorm-turbine-dummy
 *
 * Reactor Source, Adobe Inc.
 * https://github.com/Adobe-Marketing-Cloud/reactor-turbine
 */

/**
 * Adobe's Turbine "free-variable" for extensions
 *
 * @global
 * @namespace turbine
 *
 * @see {@link https://developer.adobelaunch.com/extensions/reference/turbine-free-variable/}
 */
var turbine = {
    /**
     * Build Info
     */
    "buildInfo": {
        /**
         * The minification status of the library
         *
         * @readonly
         * @type    {boolean}
         */
        "minified": true,

        /**
         * The ISO 8601 date when the current library was built
         *
         * @readonly
         * @type    {string}
         */
        "buildDate": "2019-03-31T05:39:43Z",

        /**
         * The environment for which this library was built
         *
         * @readonly
         * @type {('development'|'staging'|'production')}
         */
        "environment": "development",

        /**
         * The ISO 8601 date when the version of Turbine used inside the container was built
         *
         * @readonly
         * @type    {string}
         */
        "turbineBuildDate": "2018-12-11T21:01:34Z",

        /**
         * The Turbine version used inside the current library
         *
         * @readonly
         * @type    {string}
         */
        "turbineVersion": "25.4.0"
    },

    /**
     * Logging utility used to log messages to the console. Messages will only show in the console if debugging is turned on by the user.
     */
    "logger": {
        /**
         * Logs an informational message to the console
         *
         * @param   {...*} - Data to log to the console
         */
        "info": function() {},

        /**
         * Logs a message to the console
         *
         * @param   {...*} - Data to log to the console
         */
        "log": function() {},

        /**
         * Logs a warning message to the console
         *
         * @param   {...*} - Data to log to the console
         */
        "warn": function() {},

        /**
         * Logs an error message to the console
         *
         * @param   {...*} - Data to log to the console
         */
        "error": function() {}
    },

    /**
     * Launch Property Settings
     *
     * @readonly
     * @member {Object}
     */
    "propertySettings": {
        /**
         * Domains specified in the property's settings
         *
         * @type    {string[]}
         * @readonly
         */
        "domains": [
            "misterphilip.com"
        ],

        /**
         * Return undefined for empty data elements
         *
         * @type    boolean
         * @readonly
         */
        "undefinedVarsReturnEmpty": true
    },

    /**
     * Returns the value of a data element
     *
     * @param   {string}    name    - The name of the data element
     * @returns {*}
     */
    "getDataElementValue": function(name) { },

    /**
     * Returns the settings object that was last saved from the extension configuration view
     *
     * @returns {{}}
     */
    "getExtensionSettings": function( ) { },

    /**
     * Returns the URL where the given library file is hosted
     *
     * @param   {string}    file    - The name of the file
     * @returns {string}            - The full hosted URL to the file
     */
    "getHostedLibFileUrl": function(file) { },

    /**
     * Retrieves a module which has been shared from another extension
     *
     * @param   {string}    extensionName       - The name of the extension in which the shared module exists
     * @param   {string}    sharedModuleName    - The name of the shared module you wish to load
     * @returns {undefined|function}            - The shared module or undefined if it cannot be found
     */
    "getSharedModule": function(extensionName, sharedModuleName) { }
};