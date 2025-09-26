CREATE TABLE `audits` (
	`id` text PRIMARY KEY NOT NULL,
	`input` text NOT NULL,
	`output` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
