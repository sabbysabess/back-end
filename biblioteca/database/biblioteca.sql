use biblioteca;
select * from usuario;
desc usuario;

alter table usuario modify id_endereco int not null;
alter table usuario modify id_usuario int not null auto_increment;
alter table usuario drop column id_endereco;

alter table usuario modify column senha varchar(11) not null;
alter table usuario modify column nome varchar(30) null;
