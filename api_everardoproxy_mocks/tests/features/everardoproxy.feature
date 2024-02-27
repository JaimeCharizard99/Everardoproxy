#Quien
#que se desea
#para que
Feature:
    Yo como desarrollador de apis y microservicios, negocio me solicita crear una POC de Apigee, donde el proxy me devuelva un saludo personalizado si envio el parametro nombre o un saludo general si no envio el parametro.

    Scenario Outline: Obtener un saludo personalizado desde el proxy everardoproxy/ enviando un nombre como parametro
                
        When I GET `host`/everardoproxy?name=<name>        
        Then response code should be 200
        And response body should be valid json
        And response body path $.message should be <message>
        Examples:
        |name|message|
        |Ever|Hi Ever!, Welcome to Apigee's world|
        |Liliana|Hi Liliana!, Welcome to Apigee's world|
        
    Scenario Outline: Obtener un saludo general desde el proxy everardoproxy/
                
        When I GET `host`/everardoproxy
        Then response code should be 200
        And response body should be valid json
        And response body path $.message should be <message>
        Examples:
        |message|
        |Hi Apigeek friend!, Welcome to Apigee's world|