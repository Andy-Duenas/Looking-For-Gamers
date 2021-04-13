set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "userInfo" (
  "userId"      serial,
  "username"    text not null unique,
  "password"    text not null,
  "createdAt"   timestamptz(6) not null default now(),
  primary key ("userId")
);

create table "gameInfo" (
  "gameId"       text not null,
  "title"        text not null unique,
  "img"          text not null,
  "description"  text not null,
  primary key ("gameId")
);

create table "favorites" (
  "gameId"      text not null,
  "userId"      text not null,
  "createdAt"   timestamptz(6) not null default now()
);
