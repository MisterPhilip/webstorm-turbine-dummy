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
window.turbine = {
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
     *
     * @returns {*}
     */
    "getDataElementValue": function(name) { },

    /**
     * Returns the settings object that was last saved from the extension configuration view
     *
     * @returns {{}|undefined}
     */
    "getExtensionSettings": function( ) { },

    /**
     * Returns the URL where the given library file is hosted
     *
     * @param   {string}    file    - The name of the file
     *
     * @returns {string}            - The full hosted URL to the file
     */
    "getHostedLibFileUrl": function(file) { },

    /**
     * Retrieves a module which has been shared from another extension
     *
     * @param   {string}    extensionName       - The name of the extension in which the shared module exists
     * @param   {string}    sharedModuleName    - The name of the shared module you wish to load
     *
     * @returns {undefined|function}            - The shared module or undefined if it cannot be found
     */
    "getSharedModule": function(extensionName, sharedModuleName) { }
};

/**
 * Adobe Launch Extension Bridge
 *
 * Provides a connection between the extension views and the Launch interface.
 *
 * @global
 * @namespace extensionBridge
 *
 * @see {@link https://developer.adobelaunch.com/extensions/reference/views/}
 */
window.extensionBridge = {

    /**
     * Register callbacks for initial configuration, validation, and settings retrieval
     *
     * @param   {Object}    methods             - The callback methods for various Launch functionality
     * @param   {Function}  methods.init        - The init method will be called by Launch as soon as the view has been loaded into the iframe.
     * @param   {Function}  methods.validate    - The init method will be called by Launch as soon as the view has been loaded into the iframe. This should return true or false if the settings object is valid on save.
     * @param   {Function}  methods.getSettings - The getSettings method will be called after the user hits the “Save” button in Launch and the view has been validated. This should return the JSON object to be saved into the settings.
     */
    "register": function(methods) { },

    /**
     * Opens the code editor in a modal window
     *
     * @param   {Object}    [options]       - Various options for the code editor
     * @param   {string}    [options.code]  - Code that should be shown in the editor (e.g. existing code)
     * @param   {"javascript"|"html"|"css"|"json"|"plaintext"}    [options.language]    - The language of the code that will be edited.
     *
     * @returns {Promise}   When the user has finished editing the code, the promise will be resolved with the updated code. If the user closes the code editor without electing to save changes, the promise will never be resolved.
     */
    "openCodeEditor": function(options) { },

    /**
     * Opens the RegExp tester in a modal window
     *
     * @param   {Object}    options         - Various options for the RegExp tester
     * @param   {string}    options.pattern - The RegExp pattern the user is wanting to test
     * @param   {string}    [options.flags] - The RegExp flags that should be used
     *
     * @returns {Promise}   When the user has finished editing the regular expression, the promise will be resolved with the updated regular expression pattern. If the user closes the regex tester without electing to save changes, the promise will never be resolved.
     */
    "openRegexTester": function(options) { },

    /**
     * Opens the Data Element selector in a modal window
     *
     * @param   {Object}    [options]           - Various options for the Data Element selector
     * @param   {Boolean}   [options.tokenize]  - When set to false the Data Element name will not be wrapped in percent signs
     *
     * @returns {Promise}   When the user has finished selecting a data element, the promise will be resolved with the name of the selected data element (by default the name will be wrapped in percent signs). If the user closes the element selector without electing to save changes, the promise will never be resolved.
     */
    "openDataElementSelector": function(options) { }
};