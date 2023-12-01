input = File.read('/Users/avylov/dev/adv_code_23/day1_part1_input.in').strip

part1 = 0
part2 = 0

input.each_line do |line|
  part1_digits = []
  part2_digits = []

  line.chars.each_with_index do |c, i|
    if c.match?(/\d/)
      part1_digits.push(c)
      part2_digits.push(c)
    end

    values = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    values.each_with_index do |val, d|
      if line[i..-1].start_with?(val)
        part2_digits.push((d + 1).to_s)
      end
    end
  end

  part1 += (part1_digits[0] + part1_digits[-1]).to_i
  part2 += (part2_digits[0] + part2_digits[-1]).to_i
end

puts part1
puts part2