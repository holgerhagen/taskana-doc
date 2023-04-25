---
sidebar_position: 2
---

# Spring Boot: RestConfiguration class
Several configuration options are specified during the start of TASKANA inside the definitions of the imdividual Beans. In order to specify parameters this way, modify the Bean in the RestConfiguration class. RestConfiguration is the spring configuration class that is annotated with @Configuration. When specifying parameters this way, they overwrite the parameter values from the configuration files.

 Following parameters can be specified:
- enableSecurity
- useManagedTransactions
- propertiesFileName
- delimiter

Example: 


```
 @Bean
  public TaskanaConfiguration taskanaConfiguration(
      DataSource dataSource,
      @Qualifier("taskanaPropertiesFileName") String propertiesFileName,
      @Qualifier("taskanaPropertiesDelimiter") String delimiter) {
    return new TaskanaConfiguration.Builder(dataSource, true, schemaName, false)
        .initTaskanaProperties(propertiesFileName, delimiter)
        .build();
  }

  @Bean
  public String taskanaPropertiesFileName() {
    return "/taskana.properties";
  }

  @Bean
  public String taskanaPropertiesDelimiter() {
    return "|";
  }
```

