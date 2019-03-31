require 'test_helper'

class TimetracksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @timetrack = timetracks(:one)
  end

  test "should get index" do
    get timetracks_url
    assert_response :success
  end

  test "should get new" do
    get new_timetrack_url
    assert_response :success
  end

  test "should create timetrack" do
    assert_difference('Timetrack.count') do
      post timetracks_url, params: { timetrack: { latitude: @timetrack.latitude, longitude: @timetrack.longitude, user_id: @timetrack.user_id } }
    end

    assert_redirected_to timetrack_url(Timetrack.last)
  end

  test "should show timetrack" do
    get timetrack_url(@timetrack)
    assert_response :success
  end

  test "should get edit" do
    get edit_timetrack_url(@timetrack)
    assert_response :success
  end

  test "should update timetrack" do
    patch timetrack_url(@timetrack), params: { timetrack: { latitude: @timetrack.latitude, longitude: @timetrack.longitude, user_id: @timetrack.user_id } }
    assert_redirected_to timetrack_url(@timetrack)
  end

  test "should destroy timetrack" do
    assert_difference('Timetrack.count', -1) do
      delete timetrack_url(@timetrack)
    end

    assert_redirected_to timetracks_url
  end
end
