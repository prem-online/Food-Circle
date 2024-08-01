module Api::V2
  class SalesController < ApplicationController
    def today
      sales = Order.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).sum(:total)
      render json: { sales: }
    end

    def yesterday
      sales = Order.where(created_at: 1.day.ago.beginning_of_day..1.day.ago.end_of_day).sum(:total)
      render json: { sales: }
    end

    def week
      sales = Order.where(created_at: Time.zone.now.beginning_of_week..Time.zone.now.end_of_week).sum(:total)
      render json: { sales: }
    end
  end
end
