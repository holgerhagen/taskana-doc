---
sidebar_position: 1
---

# Security and Database Configuration
TASKANA uses standard Spring properties in combination with custom TASKANA properties to configure the database and its contents. There are also properties that allow to control some aspects of security of the REST API.

## Standard Spring database configuration

In order to configure the database, you need to use the 'spring.datasource' properties like 'spring.datasource.url' etc. These properties are not described here, as they are the same for different spring applications. Instead, they can bee looked up in the official [Spring documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html).

## TASKANA specific properties


|Parameter                        |Description                                              |Sample Value          |Optional|
|---------------------------------|---------------------------------------------------------|----------------------|--------|               
|taskana.schemaName               |Name of the schema of the TASKANA database. The default value is TASKANA. |MYTASKANA|true
|devMode                          |Enables or disables REST API security. If set to true, you will be logged in into TASKANA as no user. This way, you may send REST requests, however, you won't be able to access neigher Tasks nor Workbaskets. The default value is false.|false|true
|enableCsrf                |This property enables the support of XSRF tokens. This will not work together with devMode. You need to set it to false in order to use Basic Auth, for example in Postman.The default value is false.|true|true
|generateSampleData                      |This property controls if the database is cleaned and sample data is generated. The default value is true|true|true
