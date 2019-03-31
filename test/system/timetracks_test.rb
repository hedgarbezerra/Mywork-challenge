require "application_system_test_case"

class TimetracksTest < ApplicationSystemTestCase
  setup do
    @timetrack = timetracks(:one)
  end

  test "visiting the index" do
    visit timetracks_url
    assert_selector "h1", text: "Timetracks"
  end

  test "creating a Timetrack" do
    visit timetracks_url
    click_on "New Timetrack"

    fill_in "Latitude", with: @timetrack.latitude
    fill_in "Longitude", with: @timetrack.longitude
    fill_in "User", with: @timetrack.user_id
    click_on "Create Timetrack"

    assert_text "Timetrack was successfully created"
    click_on "Back"
  end

  test "updating a Timetrack" do
    visit timetracks_url
    click_on "Edit", match: :first

    fill_in "Latitude", with: @timetrack.latitude
    fill_in "Longitude", with: @timetrack.longitude
    fill_in "User", with: @timetrack.user_id
    click_on "Update Timetrack"

    assert_text "Timetrack was successfully updated"
    click_on "Back"
  end

  test "destroying a Timetrack" do
    visit timetracks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Timetrack was successfully destroyed"
  end
end
