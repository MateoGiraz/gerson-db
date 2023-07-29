mysql:
	docker run --name mysql-orm-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -d mysql

createdb:
	docker exec -it mysql-orm-test mysql -u root -psecret -e "CREATE DATABASE IF NOT EXISTS testDB;"

create-table:
	docker exec -it mysql-orm-test mysql -u root -psecret -D testDB -e "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));"

populate-table:
	docker exec -it mysql-orm-test mysql -u root -psecret -D testDB -e "INSERT INTO users (name, email) VALUES ('John Doe', 'johndoe@gmail.com');"

dropdb:
	docker exec -it mysql-orm-test mysql -u root -psecret -e "DROP DATABASE IF EXISTS testDB;"

mysql-terminal:
	docker exec -it mysql-orm-test mysql -u root -psecret testDB

.PHONY: mysql createdb create-table populate-table dropdb mysql-terminal
