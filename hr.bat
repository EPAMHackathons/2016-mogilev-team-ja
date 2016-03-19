call mvn -B -s settings.xml -DskipTests=true clean install
call java -jar target/dependency/webapp-runner.jar target/*.war
