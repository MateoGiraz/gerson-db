mariadb:
	docker run --name mariadb-orm-test -p 3307:3306 -e MYSQL_ROOT_PASSWORD=secret -d mariadb

createdb:
	docker exec -it mariadb-orm-test mysql -u root -psecret -e "CREATE DATABASE IF NOT EXISTS testDB;"

create-table:
	docker exec -it mariadb-orm-test mysql -u root -psecret -D testDB -e "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));"

populate-table:
	docker exec -it mariadb-orm-test mysql -u root -psecret -D testDB -e "INSERT INTO users (name) VALUES ('John Doe');"

dropdb:
	docker exec -it mariadb-orm-test mysql -u root -psecret -e "DROP DATABASE IF EXISTS testDB;"

mariadb-terminal:
	docker exec -it mariadb-orm-test mysql -u root -psecret testDB

.PHONY: mariadb createdb create-table populate-table dropdb mariadb-terminal
