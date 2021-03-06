﻿/*
  checkin
*/
describe('Conference.checkInService', function() {
  'use strict';

  var checkInService,
      checkInRecorder,
      attendee;

  beforeEach(function() {
    checkInRecorder = Conference.checkInRecorder();

    // 이 함수의 recordCheckIn 함수에 스파이를 심고
    // checkInRecorder를 주입한다
    spyOn(checkInRecorder, 'recordCheckIn');
    checkInService = Conference.checkInService(checkInRecorder);

    attendee = Conference.attendee('형철', '서');
  });

  describe('checkInService.checkIn(attendee)', function() {
    it('참가자를 체크인 처리한 것으로 표시한다', function() {
      checkInService.checkIn(attendee);
      expect(attendee.isCheckedIn()).toBe(true);
    });
    it('체크인을 등록한다', function() {
      checkInService.checkIn(attendee);
      // 외부와의 통신이 필요한 로직이라 제대로 호출했는지만 확인
      expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
    });
  });
});