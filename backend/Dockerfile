FROM maven:3.9.1-eclipse-temurin-11-alpine
WORKDIR /app
COPY ./backendG3-api ./backendG3-api
COPY ./backendG3-boot ./backendG3-boot
COPY ./backendG3-model ./backendG3-model
COPY ./backendG3-ws ./backendG3-ws
COPY pom.xml .
EXPOSE 33333
RUN mvn install
WORKDIR /app/backendG3-boot
CMD mvn spring-boot:run