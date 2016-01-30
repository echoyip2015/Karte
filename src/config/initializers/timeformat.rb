Time::DATE_FORMATS[:default] = '%Y-%m-%d %H:%M:%S'

class DateTime
  def as_json(options = nil) #:nodoc:
      strftime('%Y-%m-%d %H:%M:%S')
  end
end