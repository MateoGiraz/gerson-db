postgres:
	docker run --name postgres-orm-test -p 5432:5432 -e POSTGRES_PASSWORD=secret -d postgres

createdb:
	docker exec -it postgres-orm-test createdb --username=postgres --owner=postgres testDB

create-table:
	docker exec -it postgres-orm-test psql -U postgres testDB -c "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))"

populate-table:
	docker exec -it postgres-orm-test psql -U postgres testDB -c "INSERT INTO users (name) VALUES ('John Doe')"

dropdb:
	docker exec -it postgres-orm-test dropdb -U postgres testDB

postgres-terminal:
	docker exec -it postgres-orm-test psql -U postgres testDB

.PHONY: postgres createdb create-table populate-table dropdb postgres-terminal 
