---
sidebar_position: 2
---

# RestConfiguration class
Several configuration options are specified during the start of TASKANA as parameters during the creation of the TaskanaConfiguration Bean. In order to specify parameters this way, modify the TaskanaConfiguration Bean in the RestConfiguration class that is annotated with @Configuration. When specifying parameters this way, they overwrite the parameter values from the configuration files.

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

