module Api::V2
  class BestsellerPresenter
    def initialize(bestsellers)
      @bestsellers = bestsellers.order(Sequel.desc(:sold_quantity))
    end

    def as_graph
      format_graph
    end

    private

    def format_graph
      {
        x_series:,
        y_series:,
        day_month_year:

      }
    end

    def x_series
      @bestsellers.pluck(:name)
    end

    def y_series
      @bestsellers.pluck(:sales_quantity)
    end

    def day_month_year
      @bestsellers.first&.day_month_year
    end
  end
end
