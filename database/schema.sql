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

create table "threadTracker" (
  "postId"       serial,
  "gameId"       integer,
  "message"      text not null,
  "userId"       integer not null,
  "replyTo"      integer,
  "createdAt"    timestamptz(6) not null default now()
);

create table "favorites" (
  "gameId"      integer not null,
  "userId"      integer not null,
  "title"       text not null,
  "img"         text not null,
  "deck"        text not null,
  "createdAt"   timestamptz(6) not null default now()
);
