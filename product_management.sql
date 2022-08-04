create database Ecommerce1;
use  Ecommerce1;
create table Product
(
id BIGINT primary key,
sku VARCHAR(255),
proname VARCHAR(255),
description VARCHAR(255),
unitprice DECIMAL(13,2),
imageurl VARCHAR(255),
unitsinstock INT,
datecreated DATE,
lastupdated DATE,
categoryid BIGINT,
foreign key(categoryid) references category(categoryid)
);
desc Product;

drop table Product;

insert into Product values(1,"100000","Shampoo","good hair growth",100,"www.shampoo",10,"2022-10-11","2022-11-11",1001);
insert into Product values(2,"200000","Lotion","smooth skin",60,"www.lotion",18,"2022-07-10","2022-07-11",1002);
insert into Product values(3,"300000","condisner","hair smooting",70,"www.condisner",10,"2022-08-11","2022-08-11",1001);
insert into Product values(4,"400000","biscuit","for the nice morning",50,"www.shirt",90,"2022-08-18","2022-09-11",1005);
insert into Product values(5,"500000","vegetables","fresh & healthy",80,"www.vegetable",80,"2022-08-01","2022-09-11",1004);
insert into Product values(6,"500000","tablet","long lasting",90000,"www.tablet",80,"2022-08-16","2022-08-15",1003);
insert into Product values(7,"500000","saree","better look",5000,"www.saree",80,"2022-08-16","2022-08-15",1006);

insert into category values(1001,"hair products");
insert into category values(1002,"Beauty_Products");
insert into category values(1003,"Electronics_Products");
insert into category values(1004,"Health_Products");
insert into category values(1005,"Food_Products");
insert into category values(1006,"Retail_Products");



create table category
(
categoryid BIGINT primary key,
categoryname VARCHAR(255)
);
desc category;

select * from Product;
select * from category;
ALTER TABLE Product MODIFY id int NOT NULL AUTO_INCREMENT;

update Product set imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-WmY0D1N9FyAnKSzaGLCgpwTmL-Tc_kRR-jfr5kuy3zXExkkJb569g9hcFSxb7-WcAE&usqp=CAU" where id=1;
update Product set imageurl="https://www.google.com/aclk?sa=l&ai=DChcSEwjGiJr_06z5AhWZJCsKHfuHDdQYABADGgJzZg&sig=AOD64_2cqtkcHdKaAWBMCRf2l67Lmf3pQQ&adurl&ctype=5&ved=2ahUKEwjN-4r_06z5AhVj13MBHZt6DlAQvhd6BAgBEG4" where id=2;
update Product set imageurl="https://www.bigbasket.com/pd/40198197/dove-hair-fall-rescue-hair-conditioner-with-sunflower-oil-moisture-lock-technology-for-hair-fall-control-silky-smooth-hair-335-ml/" where id=3;
update Product set imageurl="https://www.bigbasket.com/pd/40050164/anmol-butter-bake-cookies-healthy-delicious-biscuits-tea-time-snack-28g7g/" where id=4;
update Product set imageurl="https://www.indiamart.com/orange-trading-co/other-products.html" where id=5;
update Product set imageurl="https://gadgets360.com/microsoft-surface-go-3-price-in-india-104118" where id=6;
update Product set imageurl="https://www.latestkurtidesigns.com/product/blue-silk-heavy-embroidered-saree-with-purple-blouse/" where id=7;