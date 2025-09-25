CREATE TABLE `audits` (
	`id` text PRIMARY KEY NOT NULL,
	`input` text NOT NULL,
	`output` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rules` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`priority` integer DEFAULT 100 NOT NULL,
	`config` text NOT NULL
);
