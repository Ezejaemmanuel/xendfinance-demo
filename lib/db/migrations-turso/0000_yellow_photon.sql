CREATE TABLE `market_data` (
	`id` text PRIMARY KEY NOT NULL,
	`prices` text NOT NULL,
	`market_caps` text NOT NULL,
	`total_volumes` text NOT NULL,
	`timestamp` integer NOT NULL
);
