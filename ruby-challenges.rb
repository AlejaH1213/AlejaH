# # Create a variable and return it in a sentence using string interpolation.
# my_legos = 'bonsai'
# p "I have a lego #{my_legos}"
# # output: "I have a lego bonsai"
# # Create a variable that contains a string and test some of the Ruby string methods:
# p vacation_places = 'mexico'
# # output: "mexico"
# # .upcase
# p vacation_places.upcase
# # output: "MEXICO"
# # .reverse
# p vacation_places.reverse
# # output:"ocixem"
# # .include?
# p vacation_places.include?('o')
# # output: true
# # .capitalize
# p vacation_places.capitalize
# # output: "Mexico"
# # .delete
# p vacation_places.delete('o')
# # output: "mexic"
# # .index
# vacation_places = 'mexico'
# p vacation_places.index('m')
# # output: 0
# # .swapcase
# p vacation_places.swapcase
# # output: "MEXICO"
# # Create an array that contains the name of at least five TV shows you enjoy.
# tv_shows = ['loki', 'big bang theory', 'the witcher', 'shark tank', 'amazing race']
# p tv_shows
# # output:["loki", "big bang theory", "the witcher", "shark tank", "amazing race"]
# # Find the length of the array.
# p tv_shows.length
# # output: 5
# # Return the first item in the array.
# p tv_shows[0]
# # output: "loki"
# # Return the fourth item in the array.
# p tv_shows[3]
# # output: "shark tank"
# # Permanently reverse the order of the array.
# tv_shows.reverse!
# p tv_shows
# # output: ["amazing race", "shark tank", "the witcher", "big bang theory", "loki"]
# # Create a new empty array for your top favorite TV shows.
# top_tv_shows = []
# # Using the full TV show array, add your top two favorite shows to the empty array.
# top_tv_shows << tv_shows[0]
# top_tv_shows << tv_shows[4]
# p top_tv_shows
# # output: ["amazing race", "loki"]

# # ------------------------------------------------------------
# # Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
# def sum_these_numbers (num1,num2)
#     num1 + num2
# end 
# p sum_these_numbers(2, 2) 
# # output: 4  
# # Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
# def is_even num
#     if num % 2 === 0
#         'true'
#     else 'false'
#     end
# end
# p is_even 4
# # output:"true" 
# # Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.
# def inclusive_or_invalid num
#     if num <= 10
#         'inclusive'
#     else 'invalid'
#     end
# end
# p inclusive_or_invalid 30
# # output: "invalid"
# # Create a method that takes in a string and determines if the string is a palindrome.
# # def palindrome string
# #     lowercase_string = string.downcase
# #     if lowercase_string === lowercase_string.reverse
# #         'it is a palindrome'
# #     else 'it is not a palindrome'
# #     end
# # end
# # p palindrome 'Racecar'
# # output: "it is a palindrome"
# # but if there are spaces it is not going to work so I'll do it again, comment out the top one and add the space thing that chatty told me
# def palindrome string
#     lowercase_string = string.downcase.gsub(/\s+/, '')
#     if lowercase_string == lowercase_string.reverse
#         'it is a palindrome'
#     else 'it is not a palindrome'
#     end
# end
# p palindrome 'race car'
# # output:"it is a palindrome"
# # explanation of the gsub method and the parenthesis: 
# # /: This character marks the beginning of the regular expression.
# # \s: This is an escape sequence that represents any whitespace character, including spaces, tabs, and line breaks.
# # +: This quantifier means "one or more." It tells the regular expression to match one or more consecutive whitespace characters.

# # As the first user, I can see a prompt in the terminal to enter my name.
# p 'User 1, enter your name'
# #  output: "User 1, enter your name"
# first_user = gets.chomp
# # output: aleja
# # As the second user, I can see a prompt in the terminal to enter my name.
# p 'User 2, enter your name'
# # output: "User 2, enter your name"
# second_user = gets.chomp
# # p second_user
# # output: ale
# # As the first user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
# p "#{first_user} pick: rock, paper, or scissors"
# # output: "aleja pick: rock, paper, or scissors"
# first_user_pick = gets.chomp
# # output: rock
# # As the second user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
# p "#{second_user} pick: rock, paper, or scissors"
# # output: "billy pick: rock, paper, or scissors"
# second_user_pick = gets.chomp
# # output: paper
# # As a user, I can see a message in the terminal depicting which user won the round.

# def winner(first_user, second_user, first_user_pick, second_user_pick)
#     if first_user_pick == second_user_pick
#       "It's a tie!"
#     elsif (first_user_pick == 'rock' && second_user_pick == 'scissors') ||
#           (first_user_pick == 'paper' && second_user_pick == 'rock') ||
#           (first_user_pick == 'scissors' && second_user_pick == 'paper')
#       "#{first_user} wins!"
#     else
#       "#{second_user} wins!"
#     end
#   end

#   result = winner(first_user, second_user, first_user_pick, second_user_pick)
#   p result
# # As a user, I can see a message in the terminal noting if there was a tie.

# # As a developer, you have been tasked with creating the user registration for a secure web site. To test your code, enter the user ID and password in the terminal to find out if they are acceptable. The user ID and password must adhere to the to following criteria:
# p "enter your ID"
# user_id = gets.chomp
# p "enter your password"
# user_password = gets.chomp

# def checker (user_id, user_password)
#     if user_id == user_password
#         "user id and password cannot be the same"
#     end
#     if user_id.length < 6
#         "your id needs must be at least six characters"
#     elsif user_password < 6
#         "your password must be at least six characters"
#     end
# end
# security = checker(user_id, user_password)
# p security

# User ID and password cannot be the same.
# User ID and password must be at least six characters long.
# Password must contain at least one of: !#$
# User ID cannot contain the following characters: !#$ or spaces
# Password cannot be the word "password".
# User password must contain at least one number.
# -----------------------------------------------------
# Create a loop that prints the numbers 1 to 20.
(1..20).each do |value|
    p value
end  
# output: 
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15
# 16
# 17
# 18
# 19
# 20
# Create a loop that prints the numbers 1 to 20 using a different approach than previously used.
number = 1
while number <= 20
    p number
    number += 1
end
# output:
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15
# 16
# 17
# 18
# 19
# 20
# Create a loop that prints only even numbers from 20 to 0.
number = 20
while number >= 1
    number -= 1
    if number % 2 == 0
        p number
    end    
end
# output: 
# 20
# 18
# 16
# 14
# 12
# 10
# 8
# 6
# 4
# 2
# 0
# Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.
number_array = [1, 2, 3]
def multiply (array)
    array.map do |value|
    value * 5
    end
end
p multiply (number_array)
# output: [5, 10, 15]
# Create a method that takes in an array of lowercase words and capitalizes all of the words, permanently modifying the original array.
lower_array = ['hey', 'foxtrot']

def cap_array (array)
    array.map do |value|
    value.upcase!
    end
end
p cap_array (lower_array)
# output: ["HEY", "FOXTROT"]
# Create a method that takes in an array of numbers and returns the largest number in the array.
number_array = [1, 2, 3]
def max_num (array)
    array.max
end
p  max_num(number_array)
# output: 3
# Create a method that takes in an array of words and returns the word with the least number of characters.
words_array = ['hey', 'foxtrot']
def short_word (array)
    shortest_word = array[0]
    array.each do |array|
        if array.length < shortest_word.length
            shortest_word
        end
    end
    shortest_word   
end
p short_word (words_array)
# output: "hey"
# Create a method that takes in an array of numbers and returns only the odd numbers sorted from least to greatest.
# this is my array
odd_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# this is the method to return only odd numbers sorted from least to greatest
def only_odds array
    # im going to use the select method to filter odd numbers
   odd_numbers = array.select{|value| value % 2 != 0 }
   odd_numbers.sort
end
p only_odds(odd_array)
# output: [1, 3, 5, 7, 9]
# Create a method that takes in an array of strings and returns all the strings in reverse casing. All uppercase letters should be returned lowercased and all lowercased letters should be returned in uppercase letters.
# this is my array
str_arr = ['Hello', 'Foxtrot']
# this is the method that takes the array and returns it in reverse casing and also turns uppercase in lowercase and lowercase in uppercase
def reverse_low_up array
    array.map do |value|
        value.reverse.swapcase
        # ["olleH", "tortxoF"] done and then i put .swapcase and BOOM
    end
end
p reverse_low_up(str_arr)
# output: ["OLLEh", "TORTXOf"]
# Create a method that will take in an array of numbers and return an array with the remainder of each number when divided by 2.
# the array
arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# the method
def remainer_func array
    array.map do |value|
        reminder = value % 2
    end 
end
p remainer_func(arr_num)
# output: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
# Create a method that will take in a range of letters and return an array with all the letters capitalized.
def cap_range range
    range.map {|letter| letter.upcase}
end 
letter_range = 'a'..'z'
p cap_range(letter_range) 
# output: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
# 🏔 Stretch Goals
# FizzBuzz: Create a method that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.
def fizzbuzz
    (1..100).each do |number|
      if (number % 3 == 0) && (number % 5 == 0)
        puts "FizzBuzz"
      elsif number % 3 == 0
        puts "Fizz"
      elsif number % 5 == 0
        puts "Buzz"
      else
        puts number
      end
    end
end
fizzbuzz
# output:
# 1
# 2
# Fizz
# 4
# Buzz
# Fizz
# 7
# 8
# Fizz
# Buzz
# 11
# Fizz
# 13
# 14
# FizzBuzz
# 16
# 17
# Fizz
# 19
# Buzz
# Fizz
# 22
# 23
# Fizz
# Buzz
# 26
# Fizz
# 28
# 29
# FizzBuzz
# 31
# 32
# Fizz
# 34
# Buzz
# Fizz
# 37
# 38
# Fizz
# Buzz
# 41
# Fizz
# 43
# 44
# FizzBuzz
# 46
# 47
# Fizz
# 49
# Buzz
# Fizz
# 52
# 53
# Fizz
# Buzz
# 56
# Fizz
# 58
# 59
# FizzBuzz
# 61
# 62
# Fizz
# 64
# Buzz
# Fizz
# 67
# 68
# Fizz
# Buzz
# 71
# Fizz
# 73
# 74
# FizzBuzz
# 76
# 77
# Fizz
# 79
# Buzz
# Fizz
# 82
# 83
# Fizz
# Buzz
# 86
# Fizz
# 88
# 89
# FizzBuzz
# 91
# 92
# Fizz
# 94
# Buzz
# Fizz
# 97
# 98
# Fizz
# Buzz
# Create a method that takes in an array of words and returns all the words that start with a particular letter. Example: Given the array ['Apple', 'Avocado', 'Banana', 'Mango'] and the letter 'a' the method should return ['Apple', 'Avocado']. With the same method, given the letter 'm' should return ['Mango'].

# Create a method that takes in an array of mixed data types and returns an array without any false, null, 0, or blank values.

