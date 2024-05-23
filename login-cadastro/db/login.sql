use login;

create table user (
idUser int primary key,
username varchar(20) not null,
password varchar(8) not null
);

insert into user (idUSer, username, password) values 
(1, 'sabesabes', 'miojo456');
select * from user;

insert into user (idUSer, username, password) values 
(2, 'mari', 'abcd');

insert into user (idUser, username, password) values 
(3, 'joao', 'teste');

alter table user modify idUser int not null auto_increment;