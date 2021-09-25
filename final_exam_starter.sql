USE final_exam_starter;
DROP TABLE Users;
CREATE TABLE Users (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	email VARCHAR(60) NOT NULL UNIQUE,
	password VARCHAR(60) NOT NULL,
	role VARCHAR(25) DEFAULT 'admin',
	_created datetime DEFAULT CURRENT_TIMESTAMP,
	name varchar(60) NOT NULL
);
DROP TABLE Categories;
CREATE TABLE Categories (
	id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(50) NOT NULL
);
DROP TABLE Books;
CREATE TABLE Books (
	id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	categoryid INT(11) NOT NULL,
	title VARCHAR(100) NOT NULL,
	author VARCHAR(100) NOT NULL,
	price DECIMAL(5,2) NOT NULL DEFAULT '0.00',
	_created datetime DEFAULT CURRENT_TIMESTAMP,
	KEY fk_categoryid_category_id_idx (categoryid),
	CONSTRAINT fk_categoryid_category_id FOREIGN KEY (categoryid) REFERENCES Categories (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
DROP TABLE Tokens;
CREATE TABLE Tokens (
	id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	token text,
	_created datetime DEFAULT CURRENT_TIMESTAMP,
	userid int(11) NOT NULL,
	KEY fk_userid_users_id_idx (userid),
	CONSTRAINT fk_userid_users_id FOREIGN KEY (userid) REFERENCES Users (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO  Categories VALUES (1,'Science Fiction'),(2,'Fantasy'),(3,'Political Fiction'),(4,'Thriller'),(5,'Mystery');
INSERT INTO Books VALUES (2,2,'The Hobbit','J.R.R. Tolkien',9.99,'2019-02-26 13:06:09'),(3,3,'1984','George Orwell',7.49,'2019-02-26 13:08:52'),(4,4,'The Outsider','Stephen King',20.63,'2019-02-26 13:11:07'),(5,5,'The Adventures of Sherlock Holmes','Sin Arthur Conan Doyle',8.99,'2019-02-26 13:12:33'),(11,1,'The Martian','Andy Weir',12.99,'2019-02-27 13:28:04');
SELECT * FROM Books;
SELECT * FROM Categories;

CREATE USER 'bookstore_admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bookstore_admin';
GRANT ALL PRIVILEGES ON final_exam_starter.* TO 'bookstore_admin'@'localhost';


