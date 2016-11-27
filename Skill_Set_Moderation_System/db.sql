create table skills(
	id VARCHAR(36) PRIMARY KEY NOT NULL,
    SkillName VARCHAR(200) NOT NULL,
    CreatedDTTM datetime NOT NULL
);
create table moderation_states(
	id VARCHAR(36) PRIMARY KEY NOT NULL,
    skillId VARCHAR(36) NOT NULL,
    moderation_state VARCHAR(30) NOT NULL,
    createdDTTM DATETIME NOT NULL,
	FOREIGN KEY (skillId) REFERENCES skills(id)
);