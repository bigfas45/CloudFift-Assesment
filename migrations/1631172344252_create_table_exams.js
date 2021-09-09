module.exports = {
    "up": "CREATE TABLE `exams` ( `id` VARCHAR(225) , `questions` TEXT NOT NULL , `category` VARCHAR(225) NOT NULL , `option1` TEXT NOT NULL , `option2` TEXT NOT NULL , `option3` TEXT NOT NULL , `option4` TEXT NOT NULL , PRIMARY KEY (`id`))",
    "down": ""
  }