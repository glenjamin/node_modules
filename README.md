Glenjamin's node_modules
========================

A curated list of beautiful node_modules that I like to use.

I'm continuously finding, evaluating and using different node_modules. Often I forget the names of the ones I like - especially when it's for something I only do rarely.

I'm also often asked "What module should I use for X?".

This page is my attempt to solve both of these problems, by maintaining a public list of all the modules I like.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Utility Belts](#utility-belts)
- [Debugging](#debugging)
- [HTTP](#http)
  - [Client](#client)
  - [Server](#server)
  - [Express Middleware](#express-middleware)
  - [Misc](#misc)
- [React](#react)
- [Filesystem](#filesystem)
- [Streams](#streams)
- [Data Wrangling](#data-wrangling)
- [CLI](#cli)
  - [Argument Parsing](#argument-parsing)
  - [Misc](#misc-1)
- [External Services](#external-services)
- [Testing](#testing)
- [Uncategorised](#uncategorised)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Utility Belts

* [lodash](http://npm.im/lodash) - general functional functions
* [async](http://npm.im/async) - control flow for async functions

## Debugging

* [debug](http://npm.im/debug) - simple, switchable debug logging
* [longjohn](http://npm.im/longjohn) - stitch together stack traces across event loop ticks
* [node-inspector](http://npm.im/node-inspector) - debug with webkit devtools
* [ono](http://npm.im/ono) - extending errors, including causes

## HTTP

### Client

* [axios](http://npm.im/axios) - popular promise-based http client
* [request](http://npm.im/request) - all-in-one HTTP client
* [agentkeepalive](http://npm.im/agentkeepalive) - better keepalive support for HTTP client
* [primus](http://npm.im/primus) - websocket client/server

### Server

* [express](http://npm.im/express) - popular and simple middleware based server
* [primus](http://npm.im/primus) - generic websocket-type client/server thing
* [ws](http://npm.im/ws) - actual websocket implementation
* [http-shutdown](http://npm.im/http-shutdown) - Ensure HTTP server shutdown cleanly despite keepalives

### Express Middleware

* [body-parser](http://npm.im/body-parser) - parse form / json input
* [cookie-parser](http://npm.im/cookie-parser) - cookies
* [express-secure-cookie](http://npm.im/express-secure-cookie) - secure cookies by default
* [morgan](http://npm.im/morgan) - HTTP request logging
* [bunyan-middleware](http://npm.im/bunyan-middleware) - JSON based request logging
* [http-proxy-middleware](http://npm.im/http-proxy-middleware) - Proxy requests through to backend APIs
* [linkto](http://npm.im/linkto) - Correctly calculate absolute URL based on incoming request

### Misc

* [routes](http://npm.im/routes) - basic standalone URL routing. works on client

### Templating

* [lodash-express](http://npm.im/lodash-express) - lodash templates for express
* [express-handlebars](http://npm.im/express-handlebars) - reasonably fast mustache-like templating language
* [serialize-javascript](http://npm.im/serialize-javascript) - Safely serialise JS for use in `<script>` tags

## Databases

* [knex](http://npm.im/knex) - Query builder and migrations

## React

* [react](http://npm.im/react) - React itself
* [react-bootstrap](http://npm.im/react-bootstrap) - Bootstrap widgets for React
* [react-immutable-proptypes](http://npm.im/react-immutable-proptypes)

## Filesystem

* [chokidar](http://npm.im/chokidar) - generic file watching

## Streams

* [split](http://npm.im/split) - split a stream of data into lines

## Data Wrangling

* [immutable](http://npm.im/immutable) - immutable data types
* [moment](http://npm.im/moment) - awesome date/time handling lib
* [joi](http://npm.im/joi) - datatype validation and co-ercion
* [tv4](http://npm.im/tv4) - JSON schema
* [xml2js](http://npm.im/xml2js) - sometimes XML is unavoidable
* [sax](http://npm.im/sax) - for parsing lots of XML
* [escape-string-regexp](http://npm.im/escape-string-regexp) - escaping regex strings
* [validate.js](http://npm.im/validate.js) - isomorphic contracts-style validation of data
* dot-prop - safely access deep properties
* [daggy](http://npm.im/daggy) - sum types

## CLI

### Argument Parsing

* [yargs](http://npm.im/yargs) - simple argument parsing
* [commander](http://npm.im/commander) - nice API for doing subcommands

### Misc

* [chalk](http://npm.im/chalk) - ANSI colours

## External Services

* [mysql](http://npm.im/mysql)
* [amqp](http://npm.im/amqp) - been around a long time, API is a bit weird, error handling sometimes annoying
* [AMQPea](http://npm.im/AMQPea) - my own, early days yet

## Testing

* [mocha](http://npm.im/mocha) - test running framework
* [sinon](http://npm.im/sinon) - spies/stubs/mocks
* [chai](http://npm.im/chai) - richer set of assertions, optional `expect()` API
* [dirty-chai](http://npm.im/dirty-chai) - Monkeypatch chai to promote property access assertions into function calls
* [supertest](http://npm.im/supertest) - HTTP client for testing servers
* [nock](http://npm.im/nock) - set up fake HTTP responses

## Uncategorised

* [iconv-lite](http://npm.im/iconv-lite) - Additional character sets
* [node-sass](http://npm.im/node-sass) - Sass, but for node (native module)
* [nodemon](http://npm.im/nodemon) - automatically restart/re-run script on file changes
* [time-tree](http://npm.im/time-tree) - timing with nested splits
