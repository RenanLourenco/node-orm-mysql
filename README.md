# node-orm-mysql

#Change-log

- 27/12/2022
Create Services, transfer database of controller to the services, update controllers to access services, create specific services inherit methods from principal class and connect services between them.


# Objectives

- Create an API with Sequelize
- Understand how ORM works with the database
- Organize with MVC pattern
- CRUD With Sequelize


# Tutorial

- First of all we need to install our database

In this project i use MySQL but you can use whatever database you prefer

- Creating database

In the CLI of your DB, create the database with the name of 'escola_ingles' 
SQL Command: 
  
    create database escola_ingles;

- Creating Models

Lets create our first model, mock of the SQL Command: npx sequelize-cli model:create --name "Table_name" --attributes "name_attribute":"type_attribute"

We need to create our tables based on this diagram 

![Click Here](https://github.com/RenanLourenco/node-orm-mysql/blob/main/image.png)

Based in the diagram:

    npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string   
    npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly  
    npx sequelize-cli model:create --name Níveis --attributes descr_nivel:string  
    npx sequelize-cli model:create --name Matrículas --attributes status:string 

- Migration

We can migrate to our database with the command:

    npx sequelize-cli db:migrate

After that we migrate our data to the database, to verify if everything works fine inser this command to the CLI of your database:

    use escola-ingles;

Shortly thereafter insert the command to show the tables we create:

    show tables;

Now we can verify the model of the table with the command: 

    describe Pessoas;
