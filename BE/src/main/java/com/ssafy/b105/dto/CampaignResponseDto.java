package com.ssafy.b105.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.ssafy.b105.entity.Campaign;
import com.ssafy.b105.entity.CampaignType;
import com.sun.istack.NotNull;
import com.sun.istack.Nullable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CampaignResponseDto {

    @NotNull
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String thumbnailImageUrl;

    @NotNull
    private String contentImageUrl;

    @NotNull
    private Boolean isEnd ;

    private Long viewCount;

    @Nullable
    private Long targetDonation;

    @Nullable
    @JsonFormat(shape = Shape.STRING,pattern = "yyyy-MM-dd",timezone = "Asia/Seoul")
    private LocalDateTime endDate;

    //@NotNull
    private String account;

    @NotNull
    private CampaignType type;

    @JsonFormat(shape = Shape.STRING,pattern = "yyyy-MM-dd",timezone = "Asia/Seoul")
    private LocalDateTime registDate;

    @JsonFormat(shape = Shape.STRING,pattern = "yyyy-MM-dd",timezone = "Asia/Seoul")
    private LocalDateTime lastModifiedDate;

    @Nullable
    private List<String> hashtags;

    public static CampaignResponseDto from(Campaign campaign) {
        if (campaign == null) {
            return null;
        }

        return CampaignResponseDto.builder()
            .id(campaign.getId())
            .thumbnailImageUrl(campaign.getThumbnailImageUrl())
            .isEnd(campaign.getIsEnd())
            .type(campaign.getType())
            .account(campaign.getAccount())
            .viewCount(campaign.getViewCount())
            .title(campaign.getTitle())
            .registDate(campaign.getRegistDate())
            .targetDonation(campaign.getTargetDonation())
            .contentImageUrl(campaign.getContentImageUrl())
            .targetDonation(campaign.getTargetDonation())
            .endDate(campaign.getEndDate())
            .lastModifiedDate(campaign.getLastModifiedDate())
            .hashtags(campaign.getHashtag())
            .build();
    }
}